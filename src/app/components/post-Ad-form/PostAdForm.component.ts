import {Component} from '@angular/core';
import {AdvertisementService} from '../../Services/AdServices';
@Component({
    selector:'post-Ad',
    templateUrl:`./PostAd.html`,
    styleUrls:['./PostAdform.css'],
    providers:[AdvertisementService]
    
})

export class PostAdFormComponent{
   title:any="";
   category:Array<any>=[];
   categories:Array<any>=[];
   name:any="";
   description:any="";
   constructor(private adService:AdvertisementService){
       this.adService.getAdCategories().subscribe((data)=>
       {    
           for(let item of data.data["itemList"]){
            this.category.push(item.name);
           }

       });
   }

   onSubmit(adObject:any) {
      
        console.log("inside component",adObject);
        this.adService.addAdvertisement(adObject);
   }

   
    
}