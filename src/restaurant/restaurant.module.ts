import { NgModule } from '@angular/core';
import { RestaurantLoginComponent } from './restaurantLogin.component';
import { RestaurantRegistrationComponent } from './restaurantRegistration.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { resturantRoutes } from './restaurant.routes';
import { RestaurantApproveComponent } from './restaurantApprove.component';


@NgModule({
    declarations: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
        RestaurantApproveComponent
    ],

    imports: [BrowserModule,
        RouterModule.forChild(resturantRoutes),
     
    ],

    exports: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
        RestaurantApproveComponent
    ],

})
export class RestaurantModule {

}