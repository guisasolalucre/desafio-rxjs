import { Component } from '@angular/core';
import { PowerpuffGirl, PowerpuffGirlsService } from './powerpuff-girls.service';
import { Observable, reduce, map } from 'rxjs';

@Component({
  selector: 'app-powerpuff-girls',
  templateUrl: './powerpuff-girls.component.html',
  styleUrls: ['./powerpuff-girls.component.scss']
})
export class PowerpuffGirlsComponent {

  girls$: Observable<PowerpuffGirl[]>
  totalStrength: number = 0
  mostPowerful: PowerpuffGirl[] = []

  constructor(
    private powerpuffService: PowerpuffGirlsService
  ){
    this.girls$ = this.powerpuffService.getGirls()

    this.girls$
    .pipe(
      reduce((acc, girls) => {
        return girls.reduce((total, girl) => total + girl.strength, acc);
      }, 0),
    )
    .subscribe(total => this.totalStrength = total);

    this.girls$
    .pipe(
      map(girls => girls.filter(girl => girl.strength === 100))
    )
    .subscribe(result => this.mostPowerful = result);
  }

}

