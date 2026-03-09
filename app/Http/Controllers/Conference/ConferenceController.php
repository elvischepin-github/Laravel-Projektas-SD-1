<?php

namespace App\Http\Controllers\Conference;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ConferenceController extends Controller
{
    public function index()
    {
        return view('conference.index');
    }

    public function show($id)
    {
        return view('conference.show', ['id' => $id]);
    }

    public function create()
    {
        return view('conference.create');
    }

    public function store(Request $request)
    {
        return redirect()->route('conference.index');
    }

    public function edit($id)
    {
        return view('conference.edit', ['id' => $id]);
    }

    public function update(Request $request, $id)
    {
        return redirect()->route('conference.index');
    }

    public function destroy($id)
    {
        return redirect()->route('conference.index');
    }
}
