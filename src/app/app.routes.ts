
import { Routes } from "@angular/router";
import { WelcomeComponent } from './welcome.component';
import { EditMenuComponent } from './editmenu.component';
import { RestaurantLoginComponent } from 'src/restaurant/restaurantLogin.component';

export const appRoutes: Routes = [
    {path: "editmenu", component: EditMenuComponent},
    {path: "home", component: WelcomeComponent},
    {path: "", component: RestaurantLoginComponent},

    ];