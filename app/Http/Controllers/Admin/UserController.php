<?php

namespace App\Http\Controllers\Admin;

use App\Data\MockDatabase;
use App\Http\Requests\Admin\UpdateUserRequest;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users/Index', [
            'users' => MockDatabase::users(),
        ]);
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Users/Edit', [
            'user' => MockDatabase::findUser((int) $id),
        ]);
    }

    public function update(UpdateUserRequest $request, $id)
    {
        return redirect()->route('admin.users.index');
    }
}
