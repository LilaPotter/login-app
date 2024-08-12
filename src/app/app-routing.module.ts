import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },  // Ruta para la lista de usuarios
  { path: 'create', component: UserFormComponent },  // Ruta para crear un nuevo usuario
  { path: 'edit/:id', component: UserFormComponent },  // Ruta para editar un usuario existente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
