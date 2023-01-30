@extends('layouts.default')

@section('content')
<main class="flex flex-col items-center justify-center max-w-2xl w-full h-full mx-auto space-y-2">
    <div class="bg-zinc-500 w-full rounded-md py-6">
        <h1 class="text-4xl text-gray-100 font-semibold text-center">Github profile</h1>

        <form action="{{ route('home') }}" method="GET"
            class="mt-6 w-full flex items-center flex-col justify-center gap-2">
            @csrf

            @if (!$user && strlen(request()->search) > 0)
            <div class="text-gray-200">
                Usuário não encontrado!
            </div>
            @endif

            <div class="flex items-center justify-center gap-2">
                <input type="text" value="{{ request()->search }}" name="search"
                    class="px-2 py-0.5 bg-gray-100 text-zinc-800 font-medium h-8 rounded-md outline-none focus:ring focus:ring-purple-600" />

                <button type="submit"
                    class="bg-purple-600 px-4 h-8 text-gray-100 font-medium transition-colors hover:bg-purple-700 rounded-md">
                    Search
                </button>
                <a href="{{route('home')}}" class="text-gray-100 transition-colors hover:text-opacity-70">Limpar</a>
            </div>
        </form>
    </div>

    @if (!$user)
    {{-- Caso não ache o user --}}
    <div class="bg-purple-700 h-4 rounded-full w-full">
    </div>

    @else
    {{-- Caso ache o user --}}
    <div
        class="w-full py-9  bg-gray-100 relative after:content-[''] overflow-hidden after:bottom-0 after:w-full after:h-4 after:bg-purple-700 after:absolute rounded-md flex items-center justify-center flex-col px-8">



        <img src="{{ $user['avatar_url'] }}" alt="" class="w-24 h-24 rounded-full object-cover object-center">

        <p class="text-zinc-800 font-bold text-xl mt-4">{{ $user['name'] }}</p>



        <div class="flex w-full justify-between items-center mt-5">
            <div class="flex flex-col items-center">
                <span class="text-zinc-800 font-bold text-3xl leading-none">{{ $user['public_repos'] }}</span>
                <span class="text-zinc-700 text-lg">Repositórios</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-zinc-800 font-bold text-3xl leading-none">{{ $user['followers'] }}</span>
                <span class="text-zinc-700 text-lg">Seguidores</span>
            </div>
            <div class="flex flex-col items-center">
                <span class="text-zinc-800 font-bold text-3xl leading-none">{{ $user['following'] }}</span>
                <span class="text-zinc-700 text-lg">Seguindo</span>
            </div>
        </div>
    </div>
    @endif

</main>
@endsection