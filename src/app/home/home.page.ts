import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Cadastros',
      children: [
        {
          title: 'Pacientes',
          url: '/menu/ionic',
          icon: 'logo-ionic'
        }
      ]
    }
  ];
 
  constructor() {}
 
  ngOnInit() {
  }
}
