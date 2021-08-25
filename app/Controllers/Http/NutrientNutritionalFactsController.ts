import Hash from '@ioc:Adonis/Core/Hash';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';

export default class NutrientNutritionalFactsController {
  
  public async list(ctx: HttpContextContract) {

    const idProduct = ctx.request.params().idProduct;
    
    const nutrientNutritionalFacts = await Database
      .query()
      .from('NutrientNutritionalFacts')
      .join('Nutrient', 'Nutrient.idNutrient', '=', 'NutrientNutritionalFacts.idNutrient')
      .join('NutritionalFacts', 'NutritionalFacts.idNutritionalFacts', '=', 'NutrientNutritionalFacts.idNutritionalFacts')
      .join('Product', 'Product.idProduct', '=', 'NutritionalFacts.idProduct')
      .select('NutrientNutritionalFacts.idNutrientNutritionalFacts')
      .select('Product.name as product')
      .select('Nutrient.name as nutrient')
      .select('NutrientNutritionalFacts.value')
      .where('Product.idProduct', idProduct)
    
    return nutrientNutritionalFacts;
  }

  public async index(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const nutrientNutritionalFacts = await Database
      .query()
      .from('NutrientNutritionalFacts')
      .select('*')
      .where('idNutrientNutritionalFacts', id);

    return nutrientNutritionalFacts;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const nutrientNutritionalFacts = await Database
      .table('NutrientNutritionalFacts')
      .returning(['idNutrientNutritionalFacts', 'idNutrient', 'idNutritionalFacts', 'value'])
      .insert({
        idNutrient: body.idNutrient,
        idNutritionalFacts: body.idNutritionalFacts,
        value: body.value,
      });

    return nutrientNutritionalFacts;
  }

  public async alter(ctx: HttpContextContract) {

    const id = ctx.request.params().id;
    const body = ctx.request.body();

    const nutrientNutritionalFacts = Database
      .from('NutrientNutritionalFacts')
      .where('idNutrientNutritionalFacts', id)
      .update({
        idNutrient: body.idNutrient,
        idNutritionalFacts: body.idNutritionalFacts,
        value: body.value,
      }, ['idNutrientNutritionalFacts', 'idNutrient', 'idNutritionalFacts', 'value']
      );

    return nutrientNutritionalFacts;
  }

  public async remove(ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const nutrientNutritionalFacts = Database
      .from('NutrientNutritionalFacts')
      .where('idNutrientNutritionalFacts', id)
      .delete();

    return nutrientNutritionalFacts;
  }
}
