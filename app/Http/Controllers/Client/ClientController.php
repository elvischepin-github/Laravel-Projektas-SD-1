<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Conference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/Index', [
            'conferences' => Conference::where('date', '>=', now()->toDateString())
                ->orderBy('date')
                ->get(),
        ]);
    }

    public function show($id)
    {
        $conference = Conference::findOrFail($id);

        return Inertia::render('Client/Show', [
            'conference'    => $conference,
            'isRegistered'  => Auth::user()->conferences()->where('conference_id', $id)->exists(),
        ]);
    }

    public function register(Request $request, $id)
    {
        $conference = Conference::findOrFail($id);
        $user = Auth::user();

        if (!$user->conferences()->where('conference_id', $id)->exists()) {
            $user->conferences()->attach($conference);
        }

        return redirect()->route('client.index');
    }
}
