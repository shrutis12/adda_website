import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AdvertisementService} from '../../Services/AdServices';
@Component({
    selector:'register',
    templateUrl:`./RegistrationForm.html`,
    styleUrls:['./RegistrationForm.css'],
    providers:[AdvertisementService]
})
export class RegistrationFormComponent{
    constructor(private ad:AdvertisementService){}

    onClick(obj:any){
        this.ad.registerUser(obj);
        

    }

}