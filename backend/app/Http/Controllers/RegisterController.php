<?php

namespace App\Http\Controllers;

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
            'password' => 'required|confirmed',
        ]);

        $user = User::create([
            'id' => Str::uuid(),
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(
            $user
        );
    }
}
