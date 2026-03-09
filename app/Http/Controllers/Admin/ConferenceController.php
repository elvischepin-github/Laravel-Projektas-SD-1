<?php

namespace App\Http\Controllers\Admin;

use App\Data\MockDatabase;
use App\Http\Requests\Admin\ConferenceRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class ConferenceController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Conferences/Index', [
            'conferences' => MockDatabase::conferences(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Conferences/Create');
    }

    public function store(ConferenceRequest $request)
    {
        return redirect()->route('admin.conferences.index');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Conferences/Edit', [
            'conference' => MockDatabase::findConference((int) $id),
        ]);
    }

    public function update(ConferenceRequest $request, $id)
    {
        return redirect()->route('admin.conferences.index');
    }

    public function destroy($id)
    {
        $conference = MockDatabase::findConference((int) $id);

        if ($conference && $conference['date'] < now()->toDateString()) {
            return redirect()->route('admin.conferences.index')
                ->with('error', 'Past conferences cannot be deleted.');
        }

        return redirect()->route('admin.conferences.index');
    }
}
