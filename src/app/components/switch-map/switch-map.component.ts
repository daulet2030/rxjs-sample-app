import { Component } from '@angular/core';
import { Subject, switchMap, take, zip } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss',
  standalone: true
})
export class SwitchMapComponent {

  _order = new Subject();
  orderCounter = 0;

  _complete = new Subject();

  _switchMapResult = this._order.pipe(switchMap(()=> this._complete.pipe(take(1))));
  messages: any[] = [];

  ngOnInit(): void {
    this._switchMapResult.subscribe((result) => {
      this.messages.push('Order number ' + this.orderCounter + ' result: ' +result);
    });
  }

  startNewOrder() {
    this._order.next(this.orderCounter++);
  }
}
