import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ListAnimalsComponent } from '../list-animals/list-animals.component';

@Component({
  selector: 'app-view-animal',
  templateUrl: './view-animal.component.html',
  styleUrls: ['./view-animal.component.css']
})
export class ViewAnimalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<ListAnimalsComponent>) { }

  ngOnInit() {
  }

  Close(){
    this.dialogRef.close()
  }
}
