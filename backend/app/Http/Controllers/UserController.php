<?php

namespace App\Http\Controllers;

use App\User;
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
}
