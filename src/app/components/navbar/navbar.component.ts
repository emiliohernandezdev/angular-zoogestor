import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddAnimalComponent } from '../add-animal/add-animal.component';
import { ListAnimalsComponent } from '../list-animals/list-animals.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  AddAnimal(){
    this.dialog.open(AddAnimalComponent, {
      width: '450px',
      height: '450px'
    })
  }

  ListAnimals(){
    this.dialog.open(ListAnimalsComponent, {
      width: '600px',
      height: '600px'
    })
  }

}
