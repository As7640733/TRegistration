import { Register } from './../register';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class RegistrService {
  RegisterUrl = 'api/register';
  constructor(private http: HttpClient) { }
  createRegister(register: Register): Observable<any> {
    let httpheaders = new HttpHeaders()
      .set('content-type', 'application/Json');
    let options =
    {
      header: httpheaders
    };
    return this.http.post<Register>(this.RegisterUrl, register);
  }
  getRegisterDetails(): Observable<any> {
    return this.http.get<Register[]>(this.RegisterUrl);
  }
}
