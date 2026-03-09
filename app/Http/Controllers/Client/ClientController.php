<?php

namespace App\Http\Controllers\Client;

use App\Data\MockDatabase;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/Index', [
            'conferences' => MockDatabase::conferences(),
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Client/Show', [
            'conference' => MockDatabase::findConference((int) $id),
        ]);
    }

    public function register(Request $request, $id)
    {
        return redirect()->route('client.index');
    }
}
