import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from 'src/app/content/about-me/about-me.component';
import { FurnitureComponent } from 'src/app/content/furniture/furniture.component';
import { ArchitectureComponent } from 'src/app/content/architecture/architecture.component';
import { Routes } from '@angular/router';
import { OtherAreasComponent } from 'src/app/content/other-areas/other-areas.component';
import { MyProjectComponent } from 'src/app/content/my-project/my-project.component';


const routes: Routes = [
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  { path: 'trang-chu', component: AboutMeComponent },
  { path: 'noi-that', component: FurnitureComponent },
  { path: 'thiet-ke', component: ArchitectureComponent },
  { path: 'linh-vuc-khac', component: OtherAreasComponent },
  { path: 'du-an', component: MyProjectComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot  (routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [FurnitureComponent,ArchitectureComponent,OtherAreasComponent,MyProjectComponent]