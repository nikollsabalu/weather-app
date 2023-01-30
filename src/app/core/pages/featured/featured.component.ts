import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  ForecastResponse,
  TodayWeatherResponse,
} from '../../interfaces/weather.interface';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  providers: [DatePipe],
})
export class FeaturedComponent {
  @Input() city: string = '';
  @Input() country: string = '';
  @Input() forecastData: ForecastResponse[] = [];
  @Input() forecastIcons: string[] = [];
  @Input() todayData: TodayWeatherResponse = {
    main: {
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
      feels_like: '',
      sea_level: 0,
      temp: '',
    },
    weather: [{ main: '', description: '' }],
    visibility: 0,
    wind: {
      speed: '',
    },
  };
}
