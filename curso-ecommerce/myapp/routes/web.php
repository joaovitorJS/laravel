<?php

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
