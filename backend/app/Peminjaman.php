<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    //
    public $incrementing = false;

    public function buku()
    {
        return $this->belongsTo('App\Buku');
    }
}
