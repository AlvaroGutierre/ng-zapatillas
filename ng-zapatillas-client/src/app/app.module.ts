import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZapatillaItemComponent } from './zapatilla-item/zapatilla-item.component';
import { ZapatillaDetailComponent } from './zapatilla-detail/zapatilla-detail.component';
import { ZapatillaService } from './shared/zapatilla.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {ZapatillaEditComponent } from './zapatilla-edit/zapatilla-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ZapatillaNewComponent } from './zapatilla-new/zapatilla-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ZapatillaItemComponent,
    ZapatillaDetailComponent,
    ZapatillaEditComponent,
    ZapatillaNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(ZapatillaData)
  ],
  providers: [ZapatillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
