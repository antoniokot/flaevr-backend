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

    type IngredientType = {
      idIngredient: number,
      name: string,
      isVegan: number,
      hasMilk: number, 
      hasEgg: number, 
      hasGluten: number, 
      hasSeafood: number, 
      hasFish: number,
      hasSugar: number,
      hasSoy: number,
      hasNuts: number,
    }

    const body = ctx.request.body();

    let healthScore = 10;
    let naturalScore = 10;

    const harmfulIngredients = ['Aspartame', 'Sucralose', 'Sorbitol', 
                                'Isomalte', 'Sacarina', 'Acesulfame', 'Glycerol', 
                                'HSH', 'Lactitol', 'Maltitol', 'Polidextrose',
                                'Acrilamida', 'Xarope de milho com alta frutose', 
                                'Tartazina', 'Amarelo Crepúsculo', 'Azorrubina',    // Corante Artificiais
                                'Amaranto', 'Eritrosina', 'Ponceau 4R',             // Corante Artificiais
                                'Vermelho 40', 'Azul Patente V', 'Azul Indigotina', // Corante Artificiais
                                'Azul Brilhante', 'Verde Rápido',                   // Corante Artificiais
                                'Óleo Vegetal Bromado', 'BHT', 'BHA',
                                'Benzoato de Sódio', 'Glutamato Monossódico', 'Bromato de Potássio',
                                'Nitrato de Sódio', 'Ácido Carmínico', 'Acessulfame de Potássio',
                                'Amido Modificado', 'Conservador Ácido Sórbico'];

    const beneficialIngredients = [ 'Urucum', 'Cúrcuma', 'Clorofila',
                                    'Antocianina', 'Licopeno', 'Páprica',
                                    'Maçã', 'Abacate', 'Banana',
                                    'Cereja', 'Uva', 'Kiwi', 
                                    'Limão', 'Manga', 'Melão', 
                                    'Azeitona', 'Pêssego', 'Pera', 
                                    'Abacaxi', 'Mirtilo', 'Laranja', 
                                    'Morango', 'Ovo', 'Amêndoa',
                                    'Semente de Chia', 'Coco', 'Macadâmia',
                                    'Noze', 'Amendoim', 'Aspargo',
                                    'Pimentão', 'Brócolis', 'Cenoura',
                                    'Couve-flor', 'Pepino', 'Alho',
                                    'Couve', 'Cebola', 'Tomate',
                                    'Alcachofra', 'Couve de Bruxelas', 'Repolho', 
                                    'Aipo', 'Berinjela', 'Alho-poró', 
                                    'Alface', 'Cogumelo', 'Rabanete', 
                                    'Abóbora', 'Acelga', 'Nabo', 'Abobrinha'];

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
      // if(nut.value.indexOf('m') > 0) {
      //   let value: string[] = nut.value.split('m');

      //   nut.value = parseFloat(value[0]) / 1000.0 + "g";
      // }

      if(nut.nutrient === 'Açúcares') {
        healthScore -= 0.5;
      }

      if(nut.nutrient === 'Gorduras Trans') {
        healthScore -= 0.5;
      }

      if(nut.nutrient === 'Gorduras Monoinsaturadas') {
        healthScore -= 0.5;
      }

      if(nut.nutrient === 'Gorduras Poliinsaturadas') {
        healthScore -= 0.5;
      }

      if(nut.nutrient === 'Colesterol') {
        healthScore -= 0.5;
      }
    });

    const ingredients: IngredientType[] = await Database
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
    .where('Product.idProduct', body.idProduct);

    ingredients.forEach(ing => {
      if(harmfulIngredients.indexOf(ing.name) > 0) {
        naturalScore -= 0.5;
        healthScore -= 0.5;
      }

      if(beneficialIngredients.indexOf(ing.name) > 0) {
        naturalScore += 0.2;
      }
    });

    const score = await Database
      .table('Score')
      .returning(['idScore', 'idProduct', 'health', 'natural', 'environment'])
      .insert({
        idProduct: body.idProduct,
        health: healthScore,
        natural: naturalScore,
        environment: body.environment,
      })

    return score;
  }

  public async getScoresByIdProduct(ctx: HttpContextContract) {

    const idProduct = ctx.request.params().idProduct;

    const score = await Database
      .query()
      .from('Score')
      .select('*')
      .where('Score.idProduct', '=', idProduct);

    return score;
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
