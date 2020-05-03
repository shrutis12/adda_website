import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'home-page',
    templateUrl:`./home-page.html`,
    styleUrls:['./home_page_css.css']
})

export class HomePageComponent{
     constructor(private router:Router){}

     onLoginClick(){
         this.router.navigate(['/loginForm']);
     }
    
    
}