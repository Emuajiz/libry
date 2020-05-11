<?php

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
        // $this->call(UserSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PengunjungSeeder::class);
        $this->call(PenulisSeeder::class);
        $this->call(PenerbitSeeder::class);
        $this->call(BukuSeeder::class);
        $this->call(BukuFisikSeeder::class);
        $this->call(BukuDigitalSeeder::class);
        $this->call(WishlistSeeder::class);
        $this->call(PeminjamanSeeder::class);
        $this->call(ReviewBukuSeeder::class);
    }
}
