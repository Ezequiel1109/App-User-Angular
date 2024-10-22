import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idUserEventEmitter = new EventEmitter();
  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter();
  private _findUserByIdEventEmitter = new EventEmitter();
  private _selectUserEventEmitter = new EventEmitter();
  private _errorsUsersFromEventEmmitter = new EventEmitter();
  private _pageUsersEventEmitter = new EventEmitter();
  private _handlerLoginEventEmmitter = new EventEmitter();

  constructor() { }

  get idUserEventEmitter(): EventEmitter<number>{
    return this._idUserEventEmitter;
  }
  get newUserEventEmitter(): EventEmitter<User>{
    return this._newUserEventEmitter;
  }
  get findUserByIdEventEmitter(){
    return this._findUserByIdEventEmitter;
  }
  get selectUserEventEmitter(){
    return this._selectUserEventEmitter;
  }
  get errorsUsersFromEventEmmitter(){
    return this._errorsUsersFromEventEmmitter;
  }
  get pageUsersEventEmitter(){
    return this._pageUsersEventEmitter;
  }
  get handlerLoginEventEmmitter(){
    return this._handlerLoginEventEmmitter;
  }
}
