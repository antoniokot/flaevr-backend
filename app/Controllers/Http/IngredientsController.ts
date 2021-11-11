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

  public async getIngredientsByIdProduct(ctx: HttpContextContract) {
    const idProduct = ctx.request.params().idProduct;

    const ingredients = await Database
    .query()
    .from('Ingredient')
    .join('ProductIngredient', 'Ingredient.idIngredient', '=', 'ProductIngredient.idIngredient')
    .join('Product', 'ProductIngredient.idProduct', '=', 'Product.idProduct')
    .select([
      'Ingredient.idIngredient as idIngredient', 
      'Ingredient.name as name', 
      'Ingredient.isVegan as isVegan', 
      'Ingredient.hasMilk as hasMilk', 
      'Ingredient.hasEgg as hasEgg', 
      'Ingredient.hasGluten as hasGluten', 
      'Ingredient.hasSeafood as hasSeafood', 
      'Ingredient.hasFish as hasFish',
      'Ingredient.hasSugar as hasSugar',
      'Ingredient.hasSoy as hasSoy',
      'Ingredient.hasNuts as hasNuts',
    ])
    .where('Product.idProduct', idProduct);

    return ingredients;
  }

  public async store(ctx: HttpContextContract) {

    const body = ctx.request.body();

    const ingredient = await Database
      .table('Ingredient')
      .returning(['idIngredient', 'name', 'isVegan',
                  'hasMilk', 'hasEgg', 'hasGluten',
                  'hasSeafood', 'hasFish', 'hasSugar', 
                  'hasSoy', 'hasNuts'])
      .insert({
        name: body.name,
        isVegan: body.isVegan,
        hasMilk: body.hasMilk,
        hasEgg: body.hasEgg,
        hasGluten: body.hasGluten,
        hasSeafood: body.hasSeafood,
        hasFish: body.hasFish,
        hasSugar: body.hasSugar,
        hasSoy: body.hasSoy,
        hasNuts: body.hasNuts,
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
        isVegan: body.isVegan,
        hasMilk: body.hasMilk,
        hasEgg: body.hasEgg,
        hasGluten: body.hasGluten,
        hasSeafood: body.hasSeafood,
        hasFish: body.hasFish,
        hasSugar: body.hasSugar,
        hasSoy: body.hasSoy,
        hasNuts: body.hasNuts,
      }, ['idIngredient', 'name', 'isVegan',
          'hasMilk', 'hasEgg', 'hasGluten',
          'hasSeafood', 'hasFish', 'hasSugar', 
          'hasSoy', 'hasNuts']
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
