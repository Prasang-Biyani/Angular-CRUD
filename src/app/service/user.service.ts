import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';
import { Injectable } from '@angular/core';
import { } from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private _http: HttpClient) { }
    baseUrl  = '../../assets/data/user.json';

    getUsers() {
    // tslint:disable-next-line:prefer-const
    // let fakeUsers = [
    //   {id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
    //   {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
    //   {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
    //   {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    // ];
    // return Observable
       return this._http.get<IUser[]>(this.baseUrl);
    }

    getUserById(id: number) {
        return this._http.get<IUser>(this.baseUrl + '/' + id);
    }

    createUser(user: IUser) {
        return this._http.post(this.baseUrl, user);
    }

    updateUser(user: IUser) {
        return this._http.put(this.baseUrl + '/' + user.id, user);
    }

    deleteUser(id: number) {
        return this._http.delete(this.baseUrl + '/' + id);
    }
}
