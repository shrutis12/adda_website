import {Component} from '@angular/core';
import {AdvertisementService} from '../../Services/AdServices';
import {Router} from '@angular/router';
@Component({
    selector:'user-profile',
    templateUrl:`./user-profile-page.html`,
    styleUrls:['./user_profile_page.css'],
    providers:[AdvertisementService]
    
})

export class UserProfilePageComponent{
    constructor(private adService:AdvertisementService,private router:Router){}
    advertisements:Array<any>=[];
    product_object:any={};
    userdetails={
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phone: ""

    }

   
    getMyAds(){
        //console.log(this.advertisements);
        this.adService.getAdvertisments().subscribe((data)=>
        {
            this.advertisements= data.data.mypostList;
        
            console.log(this.advertisements);    
        });
        
    }
    logout(){
        this.adService.logoutUser();
        this.router.navigate(['/logout']);

    }

    deleteObject(index:number){
        let deleteAd:Array<any>=[];
        deleteAd=this.advertisements[index];

        this.adService.deleteAdvertisement(deleteAd.id).subscribe((data:any)=>
        {
            this.adService.getAdvertisments().subscribe((data)=>
        {
            this.advertisements= data.data.mypostList;
        
                
        });
        });

    }
    viewProfile(){
       this.adService.viewUserProfile().subscribe((data:any)=>{
            let userObj=data.data["user"];
            this.userdetails.firstName=userObj.firstName;
            this.userdetails.lastName=userObj.lastName;
            this.userdetails.email=userObj.email;
            this.userdetails.phone=userObj.phone;
            this.userdetails.userName=userObj.userName;
       });

    }


    





    
}