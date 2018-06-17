import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactListService } from './services/contact-list.service';
import { Contact } from './classes/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('contactModal') contactModal: any;

  public contactList: Contact[];
  public selectedIndex: number;
  public action: String = 'create';

  constructor(private _contactListService: ContactListService) {

  }

  public onSearch(event) {
    console.log(event);
  }

  public addContactClicked() {
    this.selectedIndex = undefined;
    this._contactListService.changeIndex(this.selectedIndex);
    this.action = 'create';
  }

  public updateContactClicked() {
    this.action = 'edit';
  }

  public deleteContactClicked() {
    this._contactListService.deleteContact(this.selectedIndex);
    this.contactModal.hide();
    this.addContactClicked();
  }

  public viewContact(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
    this._contactListService.changeIndex(selectedIndex);
    this.action = 'view';
  }

  ngOnInit() {
    this.contactList = this._contactListService.contactList;
    console.log(this.contactList);
  }
}
