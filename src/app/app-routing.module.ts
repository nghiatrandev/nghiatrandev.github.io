import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { AboutMeComponent } from 'src/app/content/about-me/about-me.component';
import { FurnitureComponent } from 'src/app/content/furniture/furniture.component';
import { ArchitectureComponent } from 'src/app/content/architecture/architecture.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AboutMeComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'architect', component: ArchitectureComponent },
  { path: 'contact', component: ArchitectureComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot  (routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [FurnitureComponent,ArchitectureComponent]