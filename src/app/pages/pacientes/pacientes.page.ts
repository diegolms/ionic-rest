import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  pacientes: any;

    constructor() {

        this.pacientes = [
            'Bread',
            'Milk',
            'Cheese',
            'Snacks',
            'Apples',
            'Bananas',
            'Peanut Butter',
            'Chocolate',
            'Avocada',
            'Vegemite',
            'Muffins',
            'Paper towels'
        ];

    }

  ngOnInit() {
  }

}
