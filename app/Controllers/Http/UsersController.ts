import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import User from 'App/Models/User';

export default class UsersController {

  public async list(ctx: HttpContextContract) {
    
    const users = await Database
      .query()
      .from('User')
      .select('*');
    
    return users;
  }

  public async index(ctx: HttpContextContract) {

    const auth = ctx.auth;
    const request = ctx.request;

    const id = request.params().id;

    // await auth.use('web').authenticate();

    const user = await Database
      .query()
      .from('User')
      .select('*')
      .where('idUser', id);

    return user;
  }

  public async login(ctx: HttpContextContract) {

    const auth = ctx.auth;
    const request = ctx.request;

    const { email, password } = request.body();

    const user = await auth.use('web').attempt(email, password);

    return user;
  }

  public async logout(ctx: HttpContextContract) {

    const auth = ctx.auth;
    const request = ctx.request;

    if(await auth.use('web').authenticate())
      await auth.use('web').logout();
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const user = await Database
      .table('User')
      .returning(['idUser', 'name', 'password', 'email', 'pictureFileName', 'pictureData'])
      .insert({
        name: body.name,
        password: await Hash.make(body.password),
        email: body.email,
        // pictureFileName: body.pictureFileName,
        // pictureData: body.pictureData,
      });

    return user;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const user = Database
      .from('User')
      .where('idUser', id)
      .update({
        name: body.name,
        password: await Hash.make(body.password),
        email: body.email,
        // pictureFileName: body.pictureFileName,
        // pictureData: body.pictureData,
      }, ['idUser', 'name', 'password', 'email', 'pictureFileName', 'pictureData']
      );

    return user;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const user = Database
      .from('User')
      .where('idUser', id)
      .delete();

    return user;
  }
}
