<?php

namespace App\Http\Controllers;

use App\Facades\ApiGithub;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;

class GithubProfileController extends Controller
{

    public function index(Request $request)
    {
        $user_url = $request['search'];
        $user = null;

        if ($user_url) {
            $user = ApiGithub::get($user_url)->json(); /*Busca na Api do Github o usuário recebido pela url*/

            if (Arr::exists($user, 'message')) { /*Se o usuário não foi encontrado*/
                $user = null;
            }
        }

        return view('home', compact('user'));
    }
}
