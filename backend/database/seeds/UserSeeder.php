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
            'id' => '0ac0ec59-3887-47a4-a953-7eb1221dcb4d',
            'email' => 'thareeq@gmail.com',
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert([
            'id' => '42007061-9fac-4bc9-8a62-caa6b2730135',
            'email' => 'mohammadthareeq@gmail.com',
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert([
            'id' => '476547c4-c7a4-4b84-8c94-fdc57063d463',
            'email' => 'emuajiz@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}
