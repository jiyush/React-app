<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;


class UserController extends Controller
{
    public $successStatus = 200;

    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [  
            'email' => 'required|email', 
            'password' => 'required', 
        ]);
		if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['user'] = $user;
            return response()->json(['success' => $success,
            						'statusCode' => 1
        						], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised',
            						'statusCode' => 0
        						], 401); 
        } 
    }

    /** 
     * add user api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function add(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
		if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
		$input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] =  $user->createToken('MyApp')->accessToken; 
        $success['name'] =  $user->name;
		return response()->json(['success'=>$success,'statusCode' => 1], $this->successStatus); 
    }

    /**
     * Update user api
     */
    public function update(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required', 
            'email' => 'required|email',
            'id' => 'required'
        ]);
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()],401);
        }
        $user = User::find($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->update();
        return response()->json(['success'=> 'updated','statusCode' => 1], $this->successStatus);

    }

    /**
     * Delete user API
     */
    public function delete(){
        $validator = Validator::make($request->all(),[
            'id' => 'required'
        ]);
        if($validator->fails()){
            return response()->json(['error' => $validator->errors()],401);
        }
        $user = User::find($request->id);
        $user->delete();
    }

    /** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['success' => $user,'statusCode' => 1], $this->successStatus); 
    }

    /**
     * validate Token
     */
    public function validateToken(){
        return response()->json(['success' => 'valid Token', 'statusCode' => 1],$this->successStatus);
    }
}
