import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-select-attendant',
  templateUrl: './select-attendant.component.html',
  styleUrls: ['./select-attendant.component.css']
})
export class SelectAttendantComponent implements OnInit {
  encargados = [];
  constructor(private rest: DataProviderService) { 
    this.rest.getEncargados().subscribe(res => {
      this.encargados = res.encargados;
    })
  }

  ngOnInit() {
  }

}
