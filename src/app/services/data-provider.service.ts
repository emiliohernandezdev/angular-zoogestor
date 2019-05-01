import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  endpoint = 'http://localhost:3000/zoo/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private extractData(res){
    let body = res;
    return body || {} || [];
  }

  getEncargados() : Observable<any> {
    return this.http.get(this.endpoint + 'get-attendants', this.httpOptions).pipe(map(this.extractData))
  }

  getAnimales() : Observable<any> {
    return this.http.get(this.endpoint + 'get-animals', this.httpOptions).pipe(map(this.extractData))
  }

  setAnimal(animal){
    let params = JSON.stringify(animal)
    console.log(params)
    return this.http.post(this.endpoint + 'add-animal', params, this.httpOptions).pipe(map(this.extractData))
  }

  assignAnimalToAttendant(animal){
    let params = JSON.stringify(animal)
    
  }
}
