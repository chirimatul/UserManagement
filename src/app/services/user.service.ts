import { Injectable } from '@angular/core';
import { User, Sex } from '../models/user';

@Injectable()
export class UserService {

  users: User[] = [
    { id: 1, name: "Atul Chirame", sex: Sex.male },
    { id: 2, name: "nivedita Chirame", sex: Sex.female },
    { id: 3, name: "Akshay kumar", sex: Sex.male },
    { id: 4, name: "Hrithik roshan", sex: Sex.male },
    { id: 5, name: "Tiger shroff", sex: Sex.male },
    { id: 6, name: "Priyanka chopra", sex: Sex.female },
    { id: 7, name: "Priyanka chopra", sex: Sex.female },
    { id: 8, name: "Priyanka chopra", sex: Sex.female },
    { id: 9, name: "Priyanka chopra", sex: Sex.female }
  ];
  constructor() { }
  getUsers() {

    return this.users;
  }

}
