<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UpdateUserRequest;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users/Index', [
            'users' => User::orderBy('surname')->get(['id', 'name', 'surname', 'email']),
        ]);
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Users/Edit', [
            'user' => User::findOrFail($id),
        ]);
    }

    public function update(UpdateUserRequest $request, $id)
    {
        User::findOrFail($id)->update($request->only('name', 'surname'));

        return redirect()->route('admin.users.index');
    }
}
