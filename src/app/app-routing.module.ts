import { SubcategoriesComponent } from './components/subcategories/subcategories.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories/:branch_id',
    component: CategoriesComponent,
  },
  {
    path: 'categories/subcategories/:name',
    component: SubcategoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
