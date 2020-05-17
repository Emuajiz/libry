<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $penulis = 'c537d7e3-6429-47f6-826e-1ee66295f3fe';
        $penerbit = '37d004e6-4fbf-436c-b687-95cc84a903e8';
        $kategori = ['novel', 'koran', 'buku gambar', 'buku kuliah'];
        $id = [
            "bba9e0a5-b02b-4a92-ae32-84f5a071ffa9",
            "d1bad91a-2ebb-4e87-a0ef-a0bb6fc2bcbd",
            "bcf3fadf-a651-4298-8490-dbe0bd1effb8",
            "f84bc09c-e6d9-4a4b-91f2-f78fc8e88cc9",
            "cd09ba8a-bf10-4bc4-875f-4ab559e45f7d",
            "7e3084bc-7b7c-4acc-8bc9-c321c7630251",
            "1bdc61f3-a9e2-49b4-8bd2-e2e98d4b65f7",
            "1e74dffb-568c-48a5-8539-40a90f114ff6",
            "5f585d87-3803-4490-b421-1ce01990de15",
            "6dc50dbc-dc4f-4159-a8ec-24c933d876f9",
        ];

        $idHP = [
            "70b702f1-be9f-4139-b2f0-78d503343f15",
            "9ec6211d-5185-4f90-ba14-5b306565d89a",
            "8a3cf11f-f4e7-4efe-9f01-0a34639fe47d",
            "f5ad629c-05e5-4545-9f54-8c95da811e0f",
            "442a444d-5c4e-4ec2-98a3-c3c2e628a8f0",
            "0c2c6a2c-1ee1-46d5-987a-6f537e1bfc32",
            "1b81d090-d93a-47b3-9052-1137708ae807",
        ];

        for ($i=0; $i < 1; $i++) { 
            DB::table('bukus')->insert([
                'id' => $id[$i],
                'isbn' => '123456789',
                'judul' => 'buku' . $i,
                'kategori' => $kategori[rand(0, 3)],
                'tahun' => '2020',
                'halaman' => 245,
                'cover' => 'cover.jpg',
                'sinopsis' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'penulis_id' => $penulis,
                'penerbit_id' => $penerbit,
            ]);
        }


        for ($i=1; $i <= 7; $i++) { 
            DB::table('bukus')->insert([
                'id' => $idHP[$i-1],
                'isbn' => '123456789',
                'judul' => 'Harry Potter ' . $i,
                'kategori' => 'novel',
                'tahun' => '2020',
                'halaman' => 245,
                'cover' => 'hp' . $i . '.jpg',
                'sinopsis' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'penulis_id' => '1721f63d-7260-48ed-a788-fd53aefe92a1',
                'penerbit_id' => $penerbit,
            ]);
        }
    }
}
