import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      lastname: 'roberson',
      email: 'john.doe@gmail.com',
      username: 'Jota',
      password: '123456',
    },
    {
      id: 2,
      name: 'hola Doe',
      lastname: 'robertiu',
      email: 'davis.doe@gmail.com',
      username: 'qed',
      password: '123456',
    },
  ];
  constructor() {}

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
