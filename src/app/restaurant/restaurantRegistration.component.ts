import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
    templateUrl:"./restaurantRegistration.component.html",
   selector: "RestaurantRegistrationComponent"

})
export class RestaurantRegistrationComponent implements OnInit{
    restaurant: Restaurant;
    constructor(private restaurantService:RestaurantService) {}
    ngOnInit() {
        this.restaurant= new Restaurant();
    }
}
