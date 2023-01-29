<!doctype html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta lang="pt-BR">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>MyApp</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
  @include('components.header')

  @yield('content')

  @include('components.footer')

</body>

</html>