import {Injectable} from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()

export class AdvertisementService{
    constructor(private _http:Http,private router:Router){

    }
    ads:Array<any>=[];
    static AuthKey:string;
    static userid:string;
    addAdvertisement(item:any){

        console.log("while calling service:",AdvertisementService.AuthKey);
        console.log("inside service",item);
        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', AdvertisementService.AuthKey);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {title: item.title, name: item.name, category: item.category, description: item.description};
        
        let obj= this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());
            obj.subscribe((data)=>console.log(data));
            alert("ad posted successfully");

    }

    getAdvertisments(){
         let url = "http://192.168.3.144:9000/posts";
        let headers = new Headers();
        headers.append('auth-token',  AdvertisementService.AuthKey);
       
       let options = new RequestOptions({ headers: headers });
       let obj= this._http.get(url, options)
			.map((response: Response)=>response.json());
            obj.subscribe((data)=>console.log(data));
            return obj;
    }

    deleteAdvertisement(id:any){
        let url = "http://192.168.3.144:9000/post?postId=";
        let headers = new Headers();
        headers.append('auth-token',  AdvertisementService.AuthKey);

        return this._http.delete(url+id).map((response:Response)=>response.json());
    }

    getAdCategories(){
         let url = "http://192.168.3.144:9000/categories";
         return this._http.get(url).map((response:Response)=>response.json());

    }

    loginUser(jsonreq:any){

       // console.log(jsonreq);
         let url = "http://192.168.3.144:9000/login";
         let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          let options = new RequestOptions({ headers: headers });

          let obj=this._http.post(url, jsonreq, options).map((response:Response)=>response.json());
           obj.subscribe((data)=>{
               console.log(data);
               AdvertisementService.AuthKey=data.data["auth-token"];
               AdvertisementService.userid=data.data["userId"];
               console.log(AdvertisementService.AuthKey);
               if(AdvertisementService.AuthKey!=null){
                this.router.navigate(['/login']);
                alert("login successful");
            }
            else{
                alert("please enter correct username and password");
            }
           
            });
            


    }

    logoutUser(){
         let url = "http://192.168.3.144:9000/logout";
        let headers = new Headers();
        headers.append('auth-token',  AdvertisementService.AuthKey);

        let options = new RequestOptions({ headers: headers });
        let obj=this._http.delete(url,options).map((response:Response)=>response.json());
        obj.subscribe((data)=>{
            console.log(data);
        });


    }

    registerUser(ReqObj:any){
        console.log("json req from form: ",ReqObj);
        let url = "http://192.168.3.144:9000/register";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let jsonReqObj={firstName: ReqObj.first_name,
                        lastName: ReqObj.last_name,
                        userName: ReqObj.user_name,
                        password: ReqObj.user_password,
                        email: ReqObj.emailId,
                        phone: ReqObj.mobile_no};
        console.log("after json:",jsonReqObj);
        let obj=this._http.post(url,jsonReqObj,options).map((response:Response)=>response.json());
         obj.subscribe((data)=>{
            console.log(data);
            if(data.data.message==="Registration successful"){
                alert("Registration Successful! You can login now")
                this.router.navigate(['/loginForm']);
            }
        });


    }

    viewUserProfile(){
          let url = "http://192.168.3.144:9000/user?userId=";
        //let headers = new Headers();
       return this._http.get(url+AdvertisementService.userid).map((response:Response)=>response.json());
     /* obj.subscribe((data)=>{
          console.log(data);
          let ob1=data.data["user"];
          console.log(ob1.lastName);
        });*/
      // console.log("in view sservice");
      
    }
}