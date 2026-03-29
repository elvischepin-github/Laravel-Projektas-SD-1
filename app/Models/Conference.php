<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conference extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'location', 'date'];

    protected function casts(): array
    {
        return [
            'date' => 'datetime',
        ];
    }

    public function registeredUsers()
    {
        return $this->belongsToMany(User::class, 'users_conferences');
    }
}
