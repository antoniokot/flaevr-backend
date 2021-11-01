import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import NutrientNutritionalFactsController from './NutrientNutritionalFactsController';
import NutritionalFactsController from './NutritionalFactsController';
import ProductsController from './ProductsController';

export default class ScoresController {
  public async list (ctx: HttpContextContract) {
    const scores = await Database
      .query()
      .from('Score')
      .select('*');

    return scores;
  }

  public async index (ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const score = await Database
      .query()
      .from('Score')
      .select('*')
      .where('idScore', id);

    return score;
  }

  public async store (ctx: HttpContextContract) {

    type NutrientNutritionalFactsType = {
      idNutrientNutritionalFacts: number,
      product: string,
      nutrient: string,
      value: string,
      dailyValue: string,
    }

    const body = ctx.request.body();

    const nutrientNutritionalFacts: NutrientNutritionalFactsType[] = await Database
      .query()
      .from('NutrientNutritionalFacts')
      .join('Nutrient', 'Nutrient.idNutrient', '=', 'NutrientNutritionalFacts.idNutrient')
      .join('NutritionalFacts', 'NutritionalFacts.idNutritionalFacts', '=', 'NutrientNutritionalFacts.idNutritionalFacts')
      .join('Product', 'Product.idProduct', '=', 'NutritionalFacts.idProduct')
      .select('NutrientNutritionalFacts.idNutrientNutritionalFacts')
      .select('Product.name as product')
      .select('Nutrient.name as nutrient')
      .select('NutrientNutritionalFacts.value')
      .select('NutrientNutritionalFacts.dailyValue')
      .where('Product.idProduct', body.idProduct);
  
    nutrientNutritionalFacts.forEach(nut => {
      if(nut.value.indexOf('m') > 0) {
        let value: string[] = nut.value.split('m');

        nut.value = parseFloat(value[0]) / 1000.0 + "g";
      }
    });

    // const score = await Database
    //   .table('Score')
    //   .returning(['idScore', 'idProduct', 'health', 'nutrients', 'environment'])
    //   .insert({
    //     idProduct: body.idProduct,
    //     health: body.health,
    //     nutrients: body.nutrients,
    //     environment: body.environment,
    //   })

    // return score;
  }


  public async alter (ctx: HttpContextContract) {


  }

  public async remove (ctx: HttpContextContract) {

    const id = ctx.request.params().id;

    const score = await Database
      .from('Score')
      .where('idScore', id)
      .delete();

    return score;
  }
}
