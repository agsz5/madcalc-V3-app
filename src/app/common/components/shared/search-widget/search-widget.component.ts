import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './search-widget.component.html',
  styleUrl: './search-widget.component.scss'
})
export class SearchWidgetComponent {
title="Search Widget"
}
