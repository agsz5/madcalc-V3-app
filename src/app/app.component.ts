import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavigationBarComponent } from "./common/components/core/navigation-bar/navigation-bar.component";
import { SearchWidgetComponent } from "./common/components/shared/search-widget/search-widget.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, FlexLayoutModule, NavigationBarComponent, SearchWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'madcalc-V3-app';
}
