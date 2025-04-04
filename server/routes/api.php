<?php

use App\Http\Controllers\Api\GenderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(GenderController::class)->group(function () {
    Route::get('/loadGenders', 'loadGenders');
    Route::post('/storeGender', 'storeGender');
    Route::get('/getGender/{genderId}', 'getGender');
    Route::put('/updateGender/{gender}', 'updateGender');
    Route::put('/destroyGender/{gender}', 'destroyGender');
});

// // Route::get('/user', function (Request $request) {
// //     return $request->user();
// })->middleware('auth:sanctum');
