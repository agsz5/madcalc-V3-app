import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationBarComponent } from './common/components/core/navigation-bar/navigation-bar.component';
import { SearchWidgetComponent } from './common/components/shared/search-widget/search-widget.component';
import { MadCalcService } from '../app/common/services/mad-calc.service';
import { MadCalcApiResponse } from '../app/common/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    NavigationBarComponent,
    SearchWidgetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'madcalc-V3-app';
  madCalcData: MadCalcApiResponse | undefined;

  constructor(private madCalcService: MadCalcService) {}

  ngOnInit(): void {
    this.madCalcService.getData().subscribe(
      (response: MadCalcApiResponse) => {
        this.madCalcData = response;
        console.log(this.madCalcData);
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
