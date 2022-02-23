<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $casts = [
        'days' => 'array'
    ];
    
    protected $fillable = ['name', 'dateFrom', 'dateTo', 'days'];
}
