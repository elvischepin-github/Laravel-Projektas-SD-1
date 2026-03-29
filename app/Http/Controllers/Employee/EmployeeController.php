<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Conference;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index()
    {
        return Inertia::render('Employee/Index', [
            'conferences' => Conference::orderBy('date')->get(),
        ]);
    }

    public function show($id)
    {
        $conference = Conference::findOrFail($id);

        return Inertia::render('Employee/Show', [
            'conference' => $conference,
            'clients'    => $conference->registeredUsers()->get(['users.id', 'name', 'surname', 'email']),
        ]);
    }
}
