import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UsertableComponent } from './user-table/user-table.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UsertableComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {
  title: string = 'listado de usuarios';

  users: User[] = [];

  userSelected: User;

  open: boolean = false;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((users) => (this.users = users));
  }

  addUser(user: User) {
    if (user.id > 0) {
      this.users = this.users.map((u) => (u.id == user.id ? { ...user } : u));
    } else {
      this.users = [...this.users, { ...user, id: new Date().getTime() }];
    }
    Swal.fire({
      title: "Guardado!",
      text: "Usuario Guardado con exito!",
      icon: "success"
    });
    this.userSelected = new User();
    this.setOpen();
  }
  removeUser(id: number): void {
    Swal.fire({
      title: "Estas Seguro?",
      text: "El dato del usuario sera eliminado del sistema!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter((user) => user.id != id);
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado con exito!.",
          icon: "success"
        });
      }
    });
   

  }
  setSelectedUser(userRow: User): void {
    this.userSelected = { ...userRow };
    this.open = true;
  }
  setOpen(){
    this.open = !this.open;
  }
}
