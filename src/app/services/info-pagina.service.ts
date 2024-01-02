import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) { 
    // sirve para comprobar si esta funcionando el constructor en la consola de la pagina se puede ver
    //console.log('Servicio de InfoPágina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    /// Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;
          
    });

  }

  private cargarEquipo(){
        /// Leer el archivo JSON
        this.http.get('https://angular-html-f49f0.firebaseio.com/equipo.json')
        .subscribe((resp: any[])  => {

          this.equipo = resp;
          //console.log(resp);
    });

    //this.equipo = resp


  }
}
