import { Component } from '@angular/core';

@Component({
    templateUrl: "./editmenu.component.html"
})
export class EditMenuComponent {

    orders=[{ 
        "orderNumber"  :  101, 
        "dish"   :  "Mcveggie", 
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
    }
]

}