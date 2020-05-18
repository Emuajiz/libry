<?php

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Login
Route::post('/login', 'LoginController@index');
//Register
Route::post('/register', 'RegisterController@index');

//Route tampilkan list buku
Route::get('/buku', 'BukuController@index');
//Route tampilkan list buku terbaru
Route::get('/buku/terbaru', 'BukuController@terbaru');
//Route tampilkan list buku populer
Route::get('/buku/populer', 'BukuController@populer');
//Route cari dari judul
Route::get('/buku/cari', 'BukuController@search');
//Route detail buku
Route::get('/buku/{buku}', 'BukuController@show');
//Route menampilkan buku yang sedang
Route::middleware('auth:sanctum')->get('/pinjam', 'PinjamController@sedang');
//Route menampilkan buku yang sudah dipinjam
Route::middleware('auth:sanctum')->get('/pinjam/sudah', 'PinjamController@sudah');
//Route pinjam buku
Route::middleware('auth:sanctum')->post('/pinjam', 'PinjamController@pinjam');
//Route balikin buku
Route::middleware('auth:sanctum')->post('/balikin', 'PinjamController@balik');

// Route buat nulis review
Route::middleware('auth:sanctum')->post('/ulasan', 'ReviewController@store');

//Route list wishlist
Route::middleware('auth:sanctum')->get('/wishlist', 'WishlistController@index');
//Route tambah wishlist
Route::middleware('auth:sanctum')->post('/wishlist', 'WishlistController@store');
//Route hapus wishlist
Route::middleware('auth:sanctum')->post('/wishlist/delete', 'WishlistController@destroy');

// Route::middleware('auth:sanctum')->post('/register/pengunjung', 'PengunjungController@store');

// route pengunjung
Route::middleware('auth:sanctum')->post('/user/ganti-profile', 'UserController@profile_change');
Route::middleware('auth:sanctum')->post('/user/ganti-sandi', 'UserController@password_change');
Route::middleware('auth:sanctum')->get('/user', 'UserController@show');

// route penulis
Route::get('/penulis', 'PenulisController@index');
Route::get('/penulis/buku/{penulis}', 'PenulisController@buku');

// Route penerbit
// Route::get('/penulis/buku/{penulis}', 'PenulisController@buku');
Route::get('/penerbit/buku/{penerbit}', 'PenerbitController@buku');

// route generate uuid
Route::get('/uuid/gen', function(){
    return [
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
        Str::uuid(),
    ];
});

// route temp
Route::
// middleware('auth:sanctum')->
get('temp', function(Request $request){
    $url = Storage::url(
        'file-buku/hp1.epub'
    );
    return $url;
});