import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import {
  ForecastResponse,
  HourlyForcastResponse,
  TodayWeatherResponse,
} from '../../interfaces/weather.interface';
import { Params } from '../../config/parameters.enum';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  base: any;
  city: string = '';
  cityId: string = '3936456';
  country: string = '';
  forecastData: ForecastResponse[] = [];
  forecastIcons: string[] = [];
  hourlyForecastData: HourlyForcastResponse[] = [];
  hourlyForecastIcons: string[] = [];
  icon: string = '';
  icons: string[] = [];
  ImageSource: any;
  isHourlyForecastData = false;
  isLoadingDetail = true;
  seaLevel = false;
  showError: boolean = false;
  showInfo: boolean = true;
  showSearch: boolean = false;
  todayData: TodayWeatherResponse = {
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
  todayDate= new Date();
  weatherValue: string = '';
  isLoading = true;

  constructor(private weatherservice: WeatherService) {
    this.search();
  }

  async search(ciudad: string = this.cityId) {
    this.todayDate = new Date();
    await this.weatherservice
      .getLocalizationById(ciudad)
      .subscribe(async (resp) => {
        this.icons = [];
        this.todayData = resp;
        this.seaLevel = this.todayData.main.sea_level ? true : false;
        this.city = resp[Params.name];
        this.country = resp[Params.sys][Params.country];
        this.cityId = resp.id;
        this.icons.push(this.todayData.weather[0][Params.description]);
        let cadena = this.icons[0].split(' ').join('');
        this.icon = `assets/${cadena}.svg`;
      });
    await this.getForecast(parseInt(this.cityId));
  }

  searchByName(city: any) {
    if (city == 'error') {
      this.showError = true;
    } else {
      this.search(city['id'].toString());
      this.showError = false;
    }
  }

  getForecast(id: number, date?:Date) {
    this.isLoading = true;
    this.weatherservice.getForecast(id).subscribe((resp) => {
      this.forecastData = [];
      this.forecastIcons = [];
      this.hourlyForecastData = [];
      this.hourlyForecastIcons = [];

      let date = this.formatDate(this.todayDate);
      resp.map((forecast: any) => {
        if (forecast.dt_txt.includes('06:00:00')) {
          this.forecastData.push(forecast);
          let name = forecast.weather[0].description.split(' ').join('');
          this.forecastIcons.push(`assets/${name}.svg`);
        }
        if (forecast.dt_txt.includes(date)) {
          let name = forecast.weather[0].description.split(' ').join('');
          this.hourlyForecastData.push(forecast);
          this.hourlyForecastIcons.push(`assets/${name}.svg`);
        }
      });
      this.forecastData.slice(0, 6);
      this.isLoading = false;
      this.isHourlyForecastData = this.hourlyForecastData.length !== 0;
    });
  }

  formatDate(date: any) {
    let day = `${date.getDate()}`.padStart(2, '0');
    let month = `${date.getMonth() + 1}`.padStart(2, '0');
    let year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
}
