<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pengunjung extends Model
{
    //
    
    protected $fillable = [
        'id', 'nama', 'alamat', 'jk', 'hp', 'tl', 'pekerjaan',
    ];

    public $incrementing = false;

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function peminjaman()
    {
        return $this->hasMany('App\Peminjaman', 'pengunjung_id');
    }

    public function wishlists()
    {
        return $this->hasMany('App\Wishlist', 'pengunjung_id');
    }
}
