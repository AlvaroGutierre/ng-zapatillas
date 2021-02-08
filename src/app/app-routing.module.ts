import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZapatillaDetailComponent } from './zapatilla-detail/zapatilla-detail.component';
import { ZapatillaEditComponent } from './zapatilla-edit/zapatilla-edit.component';
import { ZapatillaNewComponent } from './zapatilla-new/zapatilla-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'zapatillas/:id/new', component: ZapatillaNewComponent},
    {path: 'zapatillas/:zapatillaId', component: ZapatillaDetailComponent},
    {path: 'zapatillas/:id/edit', component: ZapatillaEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
