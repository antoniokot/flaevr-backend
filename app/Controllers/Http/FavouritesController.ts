import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class FavouritesController {

  public async list(ctx: HttpContextContract) {
    
    const favourites = await Database
      .query()
      .from('Favourite')
      .select('*');
    
    return favourites;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const favourites = await Database
      .query()
      .from('Favourite')
      .select('*')
      .where('idFavourite', id);

    return favourites;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const favourite = await Database
      .table('Favourite')
      .returning(['idFavourite', 'idProduct'])
      .insert({
        idProduct: body.idProduct,
      });

    return favourite;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const favourite = Database
      .from('Favourite')
      .where('idFavourite', id)
      .update({
        idProduct: body.idProduct
      }, ['idFavourite', 'idProduct']
      );

    return favourite;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const favourite = Database
      .from('Favourite')
      .where('idFavourite', id)
      .delete();

    return favourite;
  }
}
