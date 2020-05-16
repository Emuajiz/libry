<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ReviewBukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (\App\Buku::all() as $key => $value) {
            foreach (\App\User::all() as $keyU => $valueU) {
                if(rand(0, 1))
                DB::table('review_bukus')->insert([
                    'id' => Str::uuid(),
                    'buku_id' => $value->id,
                    'pengunjung_id' => $valueU->id,
                    'tulisan' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    'rating' => rand(3,5)
                ]);
            }
        }
    }
}
