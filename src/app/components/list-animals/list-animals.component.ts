import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';
import {MatBottomSheet, MatDialog} from '@angular/material';
import { AnimalOptionsComponent } from '../animal-options/animal-options.component';
import { ViewAnimalComponent } from '../view-animal/view-animal.component';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {
  animales = [];
  constructor(private rest: DataProviderService, private bottomSheet: MatBottomSheet,
    public dialog: MatDialog) {
    this.rest.getAnimales().subscribe(res => {
      this.animales = res.animales;
    })
   }

  ngOnInit() {
  }

  ShowOptions(animal){
    this.bottomSheet.open(AnimalOptionsComponent, {
      data: {animal: animal}
    });
  }

  ViewAnimal(animal){
    this.dialog.open(ViewAnimalComponent, {
      data: {animal: animal},
      height: '550px',
      width: '550px'
    })
  }

}
