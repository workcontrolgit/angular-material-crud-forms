import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'HR IPMS Contacts';

    menu: Array<Object> = [
        { name: 'Help', url: '/' },
        { name: 'Github', url: 'https://github.com/workcontrolgit/angular-material-crud-forms' },
        { name: 'About', url: '/' }
    ];
}
