import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';

const APP_ROUTES: Routes = [
     { path: 'home', component: UserComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'home' }
 ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
