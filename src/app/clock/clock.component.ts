import { Component, OnDestroy } from '@angular/core';
import { ClockService } from './clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnDestroy{

  hour: number = 0
  minute: number = 0
  second: number = 0
  day: number = 0
  month: string = '0'
  year: number = 0

  clockSubscription: Subscription;
  loading: boolean = false;

  constructor(
    private clockService: ClockService
  ){
    this.loading = true;
    
    this.clockSubscription = this.clockService.getTime().subscribe( {
      next: (now: Date) => {
        this.hour = now.getHours();
        this.minute = now.getMinutes();
        this.second = now.getSeconds();
        this.day = now.getDate();
        this.month = this.getMonth(now.getMonth());
        this.year = now.getFullYear();

        this.loading = false;
      }});
  }
  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
    this.loading = false;
  }

  getMonth(monthNum: number): string{
    switch (monthNum){
      case 0: {return 'Enero'};
      case 1: {return 'Febrero'};
      case 2: {return 'Marzo'};
      case 3: {return 'Abril'};
      case 4: {return 'Mayo'};
      case 5: {return 'Junio'};
      case 6: {return 'Julio'};
      case 7: {return 'Agosto'};
      case 8: {return 'Septiembre'};
      case 9: {return 'Octubre'};
      case 10: {return 'Noviembre'};
      case 11: {return 'Diciembre'};
      default: {return ''}
    }
  }

}
