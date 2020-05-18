<?php

namespace App\Http\Controllers;

use App\User;
use App\Pengunjung;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    
    /**
     * Ganti password
     */
    public function password_change(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);

        $user = User::where('email', $request->user()->email)->first();
    
        if (! $user || ! Hash::check($request->old_password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();
        $user->tokens()->delete();

        return response()->json([
            "message" => "success",
        ]);
    
    }

    public function profile_change(Request $request)
    {
        $pengunjung = Pengunjung::find($request->user()->id);
        $pengunjung->nama = $request->nama ?? $pengunjung->nama;
        $pengunjung->alamat = $request->alamat ?? $pengunjung->alamat;
        $pengunjung->hp = $request->hp ?? $pengunjung->hp;
        $pengunjung->save();

        return $pengunjung;
    }

    public function show(Request $request)
    {
        return [
            'nama' => $request->user()->pengunjung->nama,
            'alamat' => $request->user()->pengunjung->alamat,
            'email' => $request->user()->email,
            'nomor' => $request->user()->pengunjung->hp,
        ];
    }
}
