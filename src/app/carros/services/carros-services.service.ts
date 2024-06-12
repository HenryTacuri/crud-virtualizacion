import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../interfaces/carro.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosServices{

  //http://localhost:18080/carros-crud/rs/carros/list
  private baseUrl: string = 'http://104.198.165.214:8082/carros-crud/rs/carros';

  constructor(private http: HttpClient) { }

  public guardarCarro(carro: Carro): Observable<boolean>  {
    return this.http.post<Carro>(`${this.baseUrl}`, carro)
    .pipe(
      map(resp => true),
      catchError(error => of(false))
    );
  }

  public actualizarCarro(carro: Carro): Observable<boolean> {
    return this.http.put<Carro>(`${this.baseUrl}`, carro)
    .pipe(
      map(resp => true),
      catchError(error => of(false))
    );
  }

  public eliminarCarro(codigo: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}?codigo=${codigo}`)
    .pipe(
      map(resp => true),
      catchError(error => of(false))
    );
  }

  public getCarroPorCodigo(codigo: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.baseUrl}?codigo=${codigo}`)
  }

  public getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.baseUrl}/list`);
  }

}
