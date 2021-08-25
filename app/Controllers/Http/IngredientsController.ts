import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class IngredientsController {

  public async list(ctx: HttpContextContract) {
    
    const ingredients = await Database
      .query()
      .from('Ingredient')
      .select('*');
    
    return ingredients;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const ingredient = await Database
      .query()
      .from('Ingredient')
      .select('*')
      .where('idIngredient', id);

    return ingredient;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const ingredient = await Database
      .table('Ingredient')
      .returning(['idIngredient', 'name', 'isAllergenic', 'isVegan'])
      .insert({
        name: body.name,
        isAllergenic: body.isAllergenic,
        isVegan: body.isVegan,
      });

    return ingredient;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const ingredient = Database
      .from('Ingredient')
      .where('idIngredient', id)
      .update({
        name: body.name,
        isAllergenic: body.isAllergenic,
        isVegan: body.isVegan,
      }, ['idIngredient', 'name', 'isAllergenic', 'isVegan']
    );

    return ingredient;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const ingredient = Database
      .from('Ingredient')
      .where('idIngredient', id)
      .delete();

    return ingredient;
  }
}
