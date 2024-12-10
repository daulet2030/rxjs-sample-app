import { Component } from '@angular/core';
import { Subject, zip, switchMap, take, mergeMap, map } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss',
  standalone: true,
})
export class MergeMapComponent {
  _order = new Subject();
  orderCounter = 0;

  _complete = new Subject();


  _switchMapResult = this._order.pipe(
    mergeMap((counter) =>
      this._complete.pipe(
        take(1),
        map((result) => ({ counter, result }))
      )
    )
  );
  messages: any[] = [];

  ngOnInit(): void {
    this._switchMapResult.subscribe((result) => {
      this.messages.push(
        'Order number ' + result.counter + ' result: ' + result.result
      );
    });
  }

  startNewOrder() {
    this.orderCounter++;
    this._order.next(this.orderCounter);
  }
}
