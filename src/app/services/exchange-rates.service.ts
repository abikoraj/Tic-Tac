import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  constructor( private exurl: HttpClient) { }

  getRates(base: string): Observable<object>{
    return this.exurl.get('https://api.exchangeratesapi.io/latest?base=${base}')
  }
}
