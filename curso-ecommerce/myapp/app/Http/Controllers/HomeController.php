<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {

        /*Filtro*/
        $search =  $request['search'];

        $products = Product::query();

        $products->when($search, function ($query, $value) {
            $query->where('name', 'LIKE', '%' . $value . '%');
        });

        $products = $products->get();
        /*Fim da parte de filtragem*/

        return view('home', [
            'products' => $products
        ]);
    }
}
