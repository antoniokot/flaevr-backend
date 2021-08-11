import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class UsersController {

  public async list(ctx: HttpContextContract) {
    
    const users = await Database
      .query()
      .from('User')
      .select('*');
    
    return users;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const user = await Database
      .query()
      .from('User')
      .select('*')
      .where('idUser', id);

    return user;
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
