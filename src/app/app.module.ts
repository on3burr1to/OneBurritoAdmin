import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Components
import { UserService } from './Services/user.service';
import { UserComponent } from './Components/user/user.component';
import { CreateUserComponent } from './Components/user/create-user/create-user.component';
import { UpdateUserComponent } from './Components/user/update-user/update-user.component';

// Services

// Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
