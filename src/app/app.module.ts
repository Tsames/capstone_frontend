import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListAllComponent } from './components/list-all/list-all.component';
import { ShowComponent } from './components/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    EditFormComponent,
    NavBarComponent,
    FooterComponent,
    ListAllComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      { path: '', component: ListAllComponent },
      { path: 'create', component: CreateFormComponent },
      { path: 'edit/:id', component: EditFormComponent },
      { path: 'events/:id', component: ShowComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
