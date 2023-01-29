<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
<<<<<<< HEAD
=======

>>>>>>> 6e35596 (feat: concluindo curso)
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< HEAD
        \App\Models\User::factory(10)->create();
=======
        // \App\Models\User::factory(10)->create();
>>>>>>> 6e35596 (feat: concluindo curso)

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
<<<<<<< HEAD
=======

        $this->call(ProductSeeder::class);
>>>>>>> 6e35596 (feat: concluindo curso)
    }
}
