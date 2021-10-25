/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('', 'UsersController.list');
  Route.get('/unique/:id', 'UsersController.index')
  Route.post('/login', 'UsersController.login');
  Route.post('/logout', 'UsersController.logout')
  Route.post('/post', 'UsersController.store');
  Route.put('/put/:id', 'UsersController.alter');
  Route.delete('/delete/:id', 'UsersController.remove');
})
.prefix('/users');

Route.group(() => {
  Route.get('/:idUser', 'FoldersController.list');
  Route.get('/unique/:id', 'FoldersController.index');
  Route.post('/post', 'FoldersController.store');
  Route.put('/put/:id', 'FoldersController.alter');
  Route.delete('/delete/:id', 'FoldersController.remove');
})
.prefix('/folders');

Route.group(() => {
  Route.get('', 'FavouritesController.list');
  Route.get('/:id', 'FavouritesController.index');
  Route.post('/post', 'FavouritesController.store');
  Route.put('/put/:id', 'FavouritesController.alter');
  Route.delete('/delete/:id', 'FavouritesController.remove');
})
.prefix('/favourites');

Route.group(() => {
  Route.get('/:idFolder', 'FolderProductsController.list');
  Route.get('/unique/:id', 'FolderProductsController.index');
  Route.post('/post', 'FolderProductsController.store');
  Route.put('/put/:id', 'FolderProductsController.alter');
  Route.delete('/delete/:id', 'FolderProductsController.remove');
})
.prefix('/folderProducts');

Route.group(() => {
  Route.get('', 'ProductsController.list');
  Route.get('/:id', 'ProductsController.index');
  Route.get('/barcode/:barcode', 'ProductsController.getByBarcode');
  Route.get('/folder/:idFolder', 'ProductsController.getProductsByIdFolder')
  Route.post('/post', 'ProductsController.store');
  Route.put('/put/:id', 'ProductsController.alter');
  Route.delete('/delete/:id', 'ProductsController.remove');
})
.prefix('/products');

Route.group(() => {
  Route.get('/:idUser', 'ScannedsController.list');
  Route.get('/unique/:id', 'ScannedsController.index');
  Route.get('/user/:idUser', 'ScannedsController.recents');
  Route.post('/post', 'ScannedsController.store');
  Route.put('/put/:id', 'ScannedsController.alter');
  Route.delete('/delete/:id', 'ScannedsController.remove');
})
.prefix('/scanns');

Route.group(() => {
  Route.get('/', 'StampsController.list');
  Route.get('/:id', 'StampsController.index');
  Route.post('/post', 'StampsController.store');
  Route.put('/put/:id', 'StampsController.alter');
  Route.delete('/delete/:id', 'StampsController.remove');
})
.prefix('/stamps');

Route.group(() => {
  Route.get('/:idProduct', 'ProductStampsController.list');
  Route.get('/unique/:id', 'ProductStampsController.index');
  Route.post('/post', 'ProductStampsController.store');
  Route.put('/put/:id', 'ProductStampsController.alter');
  Route.delete('/delete/:id', 'ProductStampsController.remove');
})
.prefix('/productsStamps');

Route.group(() => {
  Route.get('', 'IngredientsController.list');
  Route.get('/:id', 'IngredientsController.index');
  Route.get('/product/:idProduct', 'IngredientsController.getIngredientsByIdProduct');
  Route.post('/post', 'IngredientsController.store');
  Route.put('/put/:id', 'IngredientsController.alter');
  Route.delete('/delete/:id', 'IngredientsController.remove');
})
.prefix('/ingredients');

Route.group(() => {
  Route.get('', 'ProductIngredientsController.list');
  Route.get('/:id', 'ProductIngredientsController.index');
  Route.post('/post', 'ProductIngredientsController.store');
  Route.put('/put/:id', 'ProductIngredientsController.alter');
  Route.delete('/delete/:id', 'ProductIngredientsController.remove');
})
.prefix('/productsIngredients');

Route.group(() => {
  Route.get('', 'NutritionalFactsController.list');
  Route.get('/:id', 'NutritionalFactsController.index');
  Route.post('/post', 'NutritionalFactsController.store');
  Route.put('/put/:id', 'NutritionalFactsController.alter');
  Route.delete('/delete/:id', 'NutritionalFactsController.remove');
})
.prefix('/nutritionalFacts');

Route.group(() => {
  Route.get('', 'NutrientsController.list');
  Route.get('/:id', 'NutrientsController.index');
  Route.post('/post', 'NutrientsController.store');
  Route.put('/put/:id', 'NutrientsController.alter');
  Route.delete('/delete/:id', 'NutrientsController.remove');
})
.prefix('/nutrients');

Route.group(() => {
  Route.get('/:idProduct', 'NutrientNutritionalFactsController.list');
  Route.get('/unique/:id', 'NutrientNutritionalFactsController.index');
  Route.post('/post', 'NutrientNutritionalFactsController.store');
  Route.put('/put/:id', 'NutrientNutritionalFactsController.alter');
  Route.delete('/delete/:id', 'NutrientNutritionalFactsController.remove');
})
.prefix('/nutrientsNutritionalFacts');