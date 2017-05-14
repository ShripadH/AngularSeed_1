import { Component } from '@angular/core';
import { ClientService } from './services/client.service';
@Component({
  selector: 'my-app',
  templateUrl: '../app/app.component.html',
  providers: [ClientService]
})
export class AppComponent {
  message = 'This is the sample message.';
}