# Curso Laravel 

**Comando artisian**

Ver todos os comandos 
```sh
$ php artisan
```

Criando controller
```sh
$ php artisan make:controller NameController
```

Criando model
```sh
$ php artisan make:model Model
```

Ver manual do comnado
```sh
$ php artisan make:model --help
```

---
**Rotas**

Exemplo de rota com parâmetro opcional
```php
Route::get('/a-empresa/{sstring?}', function ($string = null) {
    return $string; 
})->name('a-empresa');
```

Exemplo de rota com parâmetros
```php
Route::get('/users/{paramA}/{paramB}', function ($paramA, $paramB) {
    return $paramA . ' - ' . $paramB; 
});
```

Exemplo de grupo de rotas 
```php
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
```
Exemplo de rota onde retorna o usuário de acordo com o campo de busca desejado
```php
Route::get('users/{user:id}', function (\App\Models\User $user) {
    return $user;
});
```


