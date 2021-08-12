import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';

import { StoreModule } from '@ngrx/store';
import { SubCategoriesReducer } from './components/subcategories/store/sub-categories.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    HomeComponent,
    SubcategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      subList: SubCategoriesReducer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
