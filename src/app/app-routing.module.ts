import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddClientComponent } from './add-client/add-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'clients-list', pathMatch: 'full' },
  { path: 'clients-list', component: ClientsListComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
