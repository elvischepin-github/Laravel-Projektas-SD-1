<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ConferenceRequest;
use App\Models\Conference;
use Inertia\Inertia;

class ConferenceController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Conferences/Index', [
            'conferences' => Conference::orderBy('date')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Conferences/Create');
    }

    public function store(ConferenceRequest $request)
    {
        Conference::create($request->validated());

        return redirect()->route('admin.conferences.index');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Conferences/Edit', [
            'conference' => Conference::findOrFail($id),
        ]);
    }

    public function update(ConferenceRequest $request, $id)
    {
        Conference::findOrFail($id)->update($request->validated());

        return redirect()->route('admin.conferences.index');
    }

    public function destroy($id)
    {
        $conference = Conference::findOrFail($id);

        if ($conference->date < now()->toDateString()) {
            return redirect()->route('admin.conferences.index')
                ->with('error', 'Past conferences cannot be deleted.');
        }

        $conference->delete();

        return redirect()->route('admin.conferences.index');
    }
}
