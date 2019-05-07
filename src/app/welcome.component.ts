import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    templateUrl: "./welcome.component.html",
    selector: "welcome"
})
export class WelcomeComponent{
  

    constructor( public nav: AppService ) {
        this.nav.show();
        
    }
   
    orders=[{ 
        "orderNumber"  :  101, 
        "dish"   :  "Burger", 
        "price"      :  200,
        "quantity" : 2 
    },
    { 
        "orderNumber"  :  102, 
        "dish"   :  "Pizza", 
        "price"      :  600,
        "quantity" : 7 
    },
    { 
        "orderNumber"  :  103, 
        "dish"   :  "Ice cream", 
        "price"      :  60,
        "quantity" : 5 
    },
    { 
        "orderNumber"  :  104, 
        "dish"   :  "Momos", 
        "price"      :  60,
        "quantity" : 5 
    }
]



}
