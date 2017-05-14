import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';


@Component({
  styles: [
    `
        .overflowAuto {
          overflow: auto;
          height:400px;
        }
        .search-results {
            overflow: scroll;            
                   height:400px;
        }`
  ],
  templateUrl: '../../app/clientList/clientList.component.html'
})

// Component class
export class ClientListComponent implements OnInit {

  clientList = [];
  tempClients = {};
  Isscrolled: number;
  scrollHeight: number;
  position = 0;
  constructor(private _clientservice: ClientService) { };
  image = "../../app/clientList/title.jpg";
  ngOnInit() {
    this._clientservice.getClients().subscribe(resClientData => this.clientList = resClientData);
    //this.clientList = this._clientservice.getClients();
  }


  AddCLients() {
    this._clientservice.getNewClients().subscribe(data => this.tempClients = data);
    Array.prototype.push.apply(this.clientList, this.tempClients);
    //this.clientList.push(this.tempClients);
  }

  onScroll(event) {
    this.Isscrolled = event.target.scrollTop;
    this.scrollHeight = event.target.scrollHeight;

    this.position = this.Isscrolled / (this.scrollHeight - event.target.offsetHeight);

    if (this.position > 0.5) {
      this.AddCLients();
      console.log('scroll event', event);
    }
  }  
}