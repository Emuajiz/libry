<?php

namespace App\Http\Controllers;

use App\Http\Resources\Pengunjung as PengunjungResource; 

use App\User;
use App\Pengunjung;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    
    /**
     * register user
     */
    public function index(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'nama' => 'required',
            'password' => 'required',
            'phone' => 'required',
            'alamat' => 'required',
        ]);

        $id = Str::uuid();
        $user = User::create([
            'id' => $id,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $pengunjung = Pengunjung::create([
            'id' => $id,
            'nama' => $request->nama,
            'alamat' => $request->alamat,
            'hp' => $request->phone,
        ]);

        return new PengunjungResource($pengunjung);
    }
}
