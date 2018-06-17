import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../classes/contact';
import { ContactListService } from '../../services/contact-list.service';

@Component({
  selector: 'app-view-contact-details',
  templateUrl: './view-contact-details.component.html',
  styleUrls: ['./view-contact-details.component.css']
})

export class ViewContactDetailsComponent implements OnInit, OnDestroy {

  @Input() index: number;
  public contact: Contact;
  private indexSubscription: Subscription;

  constructor(private _contactListService: ContactListService) {
    this.indexSubscription = this._contactListService.getIndexObservable().subscribe(index => {
      this.index = index;
      this.contact = this._contactListService.getContact(this.index);
    });
  }

  ngOnInit() {
    this.contact = this._contactListService.getContact(this.index);
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }
}
