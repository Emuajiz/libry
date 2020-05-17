<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReviewBuku extends Model
{
    public $incrementing = false;

    protected $fillable = [
        'id', 'pengunjung_id', 'buku_id', 'tulisan', 'rating'
    ];

    public function pengunjung()
    {
        return $this->belongsTo('App\User');
    }
}
