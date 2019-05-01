import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ListAnimalsComponent } from '../list-animals/list-animals.component';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { SelectAttendantComponent } from '../select-attendant/select-attendant.component';

@Component({
  selector: 'app-animal-options',
  templateUrl: './animal-options.component.html',
  styleUrls: ['./animal-options.component.css']
})
export class AnimalOptionsComponent implements OnInit {

  constructor(private bottomRef: MatBottomSheetRef<ListAnimalsComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  private dialog: MatDialog) {
    console.log(this.data)
   }

  ngOnInit() {
  }

  close(){
    this.bottomRef.dismiss()
  }

  AsignAttendant(){
    this.dialog.open(SelectAttendantComponent, {
      width: '600px',
      height: '600px',
      data: {animal: this.data}
    })
  }
}
