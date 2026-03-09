<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Routing\Controller;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Index');
    }
}
