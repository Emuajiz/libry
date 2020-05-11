<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Penulis extends Model
{
    //
    public $incrementing = false;
    // protected $keyType = 'string';

    public function buku()
    {
        return $this->hasMany('App\Buku');
    }
}
