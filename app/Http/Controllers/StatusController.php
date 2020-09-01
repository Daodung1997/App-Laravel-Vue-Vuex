<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use App\Http\Controllers\BaseController as BaseController;
class StatusController extends BaseController
{
    public function getListByStatus($status){
        $todos=null;
        $message="Get Todos";
        if($status != 'All'){
            $todos=Todo::where('status',$status)->orderBy('created_at','desc')->get();
            $message='Get Todos by Id Success';
        }else{
            $todos=Todo::orderBy('created_at','desc')->get();
            $message='Get All Todos Success';
        }
        return $this->sendResponse($todos->toArray(),$message);
    }
}
