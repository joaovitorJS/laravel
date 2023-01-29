<?php

<<<<<<< HEAD
=======
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
>>>>>>> 6e35596 (feat: concluindo curso)
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


<<<<<<< HEAD
/* Exemplo de rota com parâmetro opcional
Route::get('/a-empresa/{sstring?}', function ($string = null) {
    return $string; 
})->name('a-empresa');
*/

/*  Exemplo de rota com parâmetros
Route::get('/users/{paramA}/{paramB}', function ($paramA, $paramB) {
    return $paramA . ' - ' . $paramB; 
});
*/

/* Exemplo de grupo de rotas - 
Route::prefix('/users')->group(function () {
    Route::get('', function () {
        return 'list users';
    })->name('users');

    Route::get('/{id}', function ($id) {
        return 'user_id= ' . $id;
    })->name('users.show');;

    Route::get('/${id}/tags', function () {
        return 'users tags';
    }->name('users.tags'););
}); 
*/

/* Exemplo de rota onde retorna o usuário de acordo com o campo de busca desejado
Route::get('users/{user:id}', function (\App\Models\User $user) {
    return $user;
});
*/


Route::get('/', function () {
    return view('welcome');
});
=======
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/product/{product:slug}', [ProductController::class, 'show'])->name('product');

//Admin
Route::get('/admin/products', [AdminProductController::class, 'index'])
  ->name('admin.products');

Route::get('/admin/products/create', [AdminProductController::class, 'create'])
  ->name('admin.products.create');
Route::post('/admin/products', [AdminProductController::class, 'store'])
  ->name('admin.products.store');

Route::get('/admin/products/{product}/edit', [AdminProductController::class, 'edit'])
  ->name('admin.products.edit');
Route::put('/admin/products/{product}', [AdminProductController::class, 'update'])
  ->name('admin.products.update');

Route::get('/admin/products/{product}/delete', [AdminProductController::class, 'delete'])
  ->name('admin.products.delete');
Route::delete('/admin/products/{product}', [AdminProductController::class, 'destroy'])
  ->name('admin.products.destroy');

Route::get('/admin/products/{product}/delete-image', [AdminProductController::class, 'destroyImage'])
  ->name('admin.products.destroyImage');
>>>>>>> 6e35596 (feat: concluindo curso)
