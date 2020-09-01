<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($result , $message){
        $response=[
            'success'=>true,
            'code'=>200,
            'data'=>$result,
            'message'=>$message
        ];
        return response()->json($response,200);
    }
    public function sendErrors($error, $messegaError=[],$code=404){
        $response=[
            'success'=>false,
            'message'=>$error,
        ];
        if(!$messegaError){
            $response['data']=$messegaError;
        }
        return response()->json($response, $error);

    }
}
