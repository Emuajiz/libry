<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pengunjung extends Model
{
    //
    
    protected $fillable = [
        'id', 'nama', 'hp', 'alamat'
    ];

    public $incrementing = false;

    public function user()
    {
        return $this->belongsTo('App\User', 'id');
    }
}
