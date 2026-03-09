<?php

namespace App\Http\Controllers\Employee;

use App\Data\MockDatabase;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index()
    {
        return Inertia::render('Employee/Index', [
            'conferences' => MockDatabase::conferences(),
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Employee/Show', [
            'conference' => MockDatabase::findConference((int) $id),
            'clients' => MockDatabase::registeredClientsForConference((int) $id),
        ]);
    }
}
