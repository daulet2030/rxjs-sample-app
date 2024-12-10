import { Component, OnInit } from '@angular/core';
import { Subject, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  imports: [],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.scss',
  standalone: true,
})
export class ZipComponent implements OnInit {
  _item1 = new Subject();
  _item2 = new Subject();
  _item3 = new Subject();

  _result = zip(this._item1, this._item2, this._item3);

  messages: any[] = [];

  ngOnInit(): void {
    this._result.subscribe((result) => {
      this.messages.push(result);
    });
  }
}
