import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZipComponent } from './components/zip/zip.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZipComponent, SwitchMapComponent, MergeMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-sample-app';
}
