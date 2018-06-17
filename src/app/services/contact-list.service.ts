import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactListService {
    private _contactList: Contact[] = [];
    private indexSubject = new Subject<number>();

    constructor() {
    }

    public get contactList() {
        return this._contactList;
    }

    public getContact(index: number) {
        return this._contactList[index];
    }

    public addContact(contact: Contact) {
        this._contactList.push(contact);
        console.log(this._contactList);
    }

    public editContact(index: number, contact: Contact) {
        this._contactList.splice(index, 1, contact);
    }

    public deleteContact(index: number) {
        this._contactList.splice(index, 1);
    }

    public changeIndex(index: number) {
        this.indexSubject.next(index);
    }

    public getIndexObservable(): Observable<number> {
        return this.indexSubject.asObservable();
    }
}
