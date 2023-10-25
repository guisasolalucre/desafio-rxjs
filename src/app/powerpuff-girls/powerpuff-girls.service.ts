import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PowerpuffGirl {
  id: number;
  name: string;
  strength: number;
}

@Injectable({
  providedIn: 'root'
})
export class PowerpuffGirlsService {

  constructor() { }

  getGirls(): Observable<PowerpuffGirl[]>{
    return of([
      {
        id: 1,
        name: 'Bombon',
        strength: 90,
      },
      {
        id: 2,
        name: 'Burbuja',
        strength: 80,
      },
      {
        id: 3,
        name: 'Bellota',
        strength: 100,
      },
    ])
  }
}
