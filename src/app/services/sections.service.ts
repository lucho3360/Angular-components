import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  private actionSubject = new Subject<any>();

  // proporcionar una capa adicional de abstracción y control. Al exponer solo el observable,
  // se limita la capacidad de modificar directamente el estado interno del Subject desde fuera de la clase.
  currentActionSubject = this.actionSubject.asObservable();

  constructor() { }


  setNextAction(action: string) {
    this.actionSubject.next(action);
  }



}
