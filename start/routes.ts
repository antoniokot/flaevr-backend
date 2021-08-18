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
  Route.get('/:id', 'UsersController.index');
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
  Route.get('', 'FolderFavouritesController.list');
  Route.get('/:id', 'FolderFavouritesController.index');
  Route.post('/post', 'FolderFavouritesController.store');
  Route.put('/put/:id', 'FolderFavouritesController.alter');
  Route.delete('/delete/:id', 'FolderFavouritesController.remove');
})
.prefix('/foldersFavourites');

Route.group(() => {
  Route.get('', 'ProductsController.list');
  Route.get('/:id', 'ProductsController.index');
  Route.post('/post', 'ProductsController.store');
  Route.put('/put/:id', 'ProductsController.alter');
  Route.delete('/delete/:id', 'ProductsController.remove');
})
.prefix('/products');

Route.group(() => {
  Route.get('/:idUser', 'ScannedsController.list');
  Route.get('/unique/:id', 'ScannedsController.index');
  Route.post('/post', 'ScannedsController.store');
  Route.put('/put/:id', 'ScannedsController.alter');
  Route.delete('/delete/:id', 'ScannedsController.remove');
})
.prefix('/scanns');