<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return view('layout/page_layout');
    }

    public function dashboard(): string
    {
        return view('pages/dashboard');
    }
    public function messages(): string
    {
        return view('pages/dashboard');
    }
}
