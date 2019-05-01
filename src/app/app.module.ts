import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListAnimalsComponent } from './components/list-animals/list-animals.component';
import { ListAttendantsComponent } from './components/list-attendants/list-attendants.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AddAttendantComponent } from './components/add-attendant/add-attendant.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button"
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { DataProviderService } from './services/data-provider.service';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material';
import { AnimalOptionsComponent } from './components/animal-options/animal-options.component';
import { SelectAttendantComponent } from './components/select-attendant/select-attendant.component';
import { ViewAnimalComponent } from './components/view-animal/view-animal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAnimalsComponent,
    ListAttendantsComponent,
    AddAnimalComponent,
    AddAttendantComponent,
    HomeComponent,
    NotFoundComponent,
    AnimalOptionsComponent,
    SelectAttendantComponent,
    ViewAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatSnackBarModule,
    MatListModule,
    MatBottomSheetModule,
    MatDialogModule
  ],
  entryComponents: [
    AddAnimalComponent,
    AnimalOptionsComponent,
    SelectAttendantComponent,
    ViewAnimalComponent
  ],
  providers: [
    DataProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
