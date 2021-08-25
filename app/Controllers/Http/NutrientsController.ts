import Hash from '@ioc:Adonis/Core/Hash';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class NutrientsController {
  public async list(ctx: HttpContextContract) {
    
    const nutrients = await Database
      .query()
      .from('Nutrient')
      .select('*');
    
    return nutrients;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const nutrient = await Database
      .query()
      .from('Nutrient')
      .select('*')
      .where('idNutrient', id);

    return nutrient;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const nutrient = await Database
      .table('Nutrient')
      .returning(['idNutrient', 'name'])
      .insert({
        name: body.name,
      });

    return nutrient;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const nutrient = Database
      .from('Nutrient')
      .where('idNutrient', id)
      .update({
        name: body.name,
      }, ['idNutrient', 'name']
      );

    return nutrient;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const nutrient = Database
      .from('Nutrient')
      .where('idNutrient', id)
      .delete();

    return nutrient;
  }
}
