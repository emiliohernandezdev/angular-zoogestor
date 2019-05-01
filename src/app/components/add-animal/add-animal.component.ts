import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {
  animal: Animal = new Animal('', '', 0, '', '', '', '');
  constructor(private rest: DataProviderService, public dialogRef: MatDialogRef<HomeComponent>,
    public snack: MatSnackBar) { }

  ngOnInit() {
  }

  saveAnimal(){
    this.rest.setAnimal(this.animal).subscribe(res => {
      if(res.animalSave && res.animalSave._id){
        this.snack.open('Animal guardado con éxito', 'Cerrar', {
          duration: 2500
        })
        this.dialogRef.close()
      }else{
        this.snack.open('Error al guardar el animal', 'Cerrar', {
          duration: 2500
        })
      }
    })
  }

}
