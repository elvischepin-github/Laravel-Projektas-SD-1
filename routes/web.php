<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ConferenceController as AdminConferenceController;
use App\Http\Controllers\Conference\ConferenceController;
use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Employee\EmployeeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.index');
    Route::get('/users', [UserController::class, 'index'])->name('admin.users.index');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
    Route::put('/users/{id}', [UserController::class, 'update'])->name('admin.users.update');
    Route::get('/conferences', [AdminConferenceController::class, 'index'])->name('admin.conferences.index');
    Route::get('/conferences/create', [AdminConferenceController::class, 'create'])->name('admin.conferences.create');
    Route::post('/conferences', [AdminConferenceController::class, 'store'])->name('admin.conferences.store');
    Route::get('/conferences/{id}/edit', [AdminConferenceController::class, 'edit'])->name('admin.conferences.edit');
    Route::put('/conferences/{id}', [AdminConferenceController::class, 'update'])->name('admin.conferences.update');
    Route::delete('/conferences/{id}', [AdminConferenceController::class, 'destroy'])->name('admin.conferences.destroy');
});

Route::prefix('client')->group(function () {
    Route::get('/', [ClientController::class, 'index'])->name('client.index');
    Route::get('/{id}', [ClientController::class, 'show'])->name('client.show');
    Route::post('/{id}/register', [ClientController::class, 'register'])->name('client.register');
});

Route::prefix('employee')->group(function () {
    Route::get('/', [EmployeeController::class, 'index'])->name('employee.index');
    Route::get('/{id}', [EmployeeController::class, 'show'])->name('employee.show');
});

Route::prefix('conference')->group(function () {
    Route::get('/', [ConferenceController::class, 'index'])->name('conference.index');
    Route::get('/create', [ConferenceController::class, 'create'])->name('conference.create');
    Route::post('/', [ConferenceController::class, 'store'])->name('conference.store');
    Route::get('/{id}', [ConferenceController::class, 'show'])->name('conference.show');
    Route::get('/{id}/edit', [ConferenceController::class, 'edit'])->name('conference.edit');
    Route::put('/{id}', [ConferenceController::class, 'update'])->name('conference.update');
    Route::delete('/{id}', [ConferenceController::class, 'destroy'])->name('conference.destroy');
});
