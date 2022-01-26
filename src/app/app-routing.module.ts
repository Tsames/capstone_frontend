import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllComponent } from './components/list-all/list-all.component';
import { ShowComponent } from './components/show/show.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const routes: Routes = [
  { path: '', component: ListAllComponent},
  { path: 'create', component: CreateFormComponent },
  { path: 'edit/:id', component: EditFormComponent},
  { path: 'events/:id', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
