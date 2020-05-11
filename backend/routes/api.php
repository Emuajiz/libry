<?php

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;

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
//Route detail buku
Route::get('/buku/{buku}', 'BukuController@show');
//Route menampilkan buku yang dipinjamg
Route::middleware('auth:sanctum')->get('/pinjam', 'PinjamController@index');
//Route pinjam buku
Route::middleware('auth:sanctum')->post('/pinjam', 'PinjamController@pinjam');
//Route balikin buku
Route::middleware('auth:sanctum')->post('/balikin', 'PinjamController@balik');

//Route list wishlist
Route::middleware('auth:sanctum')->get('/wishlist', 'WishlistController@index');
//Route tambah wishlist
Route::middleware('auth:sanctum')->post('/wishlist', 'WishlistController@store');
//Route hapus wishlist
Route::middleware('auth:sanctum')->delete('/wishlist/{buku}', 'WishlistController@destroy');

Route::middleware('auth:sanctum')->post('/register/pengunjung', 'PengunjungController@store');

Route::middleware('auth:sanctum')->post('/user/ganti-sandi', 'UserController@password_change');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::any('/tes', function(Request $request){
    // $tanggal = \Carbon\Carbon::parse('2020-05-07T10:44:31.000000Z');
    return [
        $request->all()
    ];
});

// route penulis
Route::get('/penulis', 'PenulisController@index');

// route generate uuid
Route::get('/uuid/gen', function(){
    return Str::uuid();
});