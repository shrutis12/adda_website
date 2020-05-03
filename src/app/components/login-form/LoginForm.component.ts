import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AdvertisementService} from '../../Services/AdServices';

@Component({
    selector:'login',
    templateUrl:`./LoginForm.html`,
    styleUrls:['./LoginForm.css'],
    providers:[AdvertisementService]
})
export class LoginFormComponent{
    constructor(private router:Router,private ad:AdvertisementService){}
    
    onClick(username:any,pwd:any)
    {
        let jsonReqObj={userName:username,password:pwd};
        this.ad.loginUser(jsonReqObj);
            

       
    }

}