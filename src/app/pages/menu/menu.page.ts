import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Cadastros',
      children: [
        {
          title: 'Pacientes',
          url: '/menu/pacientes',
          icon: 'person'
        }
      ]
    },
    {
      title: 'Logout',
      url: '/menu/main',
      icon: 'exit'
    },
  ];
 
  constructor() { }
 
  ngOnInit() {
  }

  openPage(page) {

    switch (true) {

      case ((page.title == 'Logout')): {
        console.log('Clicked Logout button');
        // this.logout(); // call logout logic method
      }
          break;

      case ((page.title == 'Pacientes')): {
        console.log('Pacientes Share button');
        // this.share(); call share logic method
      }
          break;

      
  }

}
 

}
