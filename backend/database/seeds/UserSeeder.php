<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            'id' => Str::uuid(),
            'email' => 'thareeq@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}
