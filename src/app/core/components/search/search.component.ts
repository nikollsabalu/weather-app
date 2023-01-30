import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() search: EventEmitter<string[]> = new EventEmitter();

  city: string = '418440';
  datos: any;
  datosProximosDias: string[] = [];
  hoy: Date = new Date();
  iconos: string[] = [];
  mostrarBusqueda: boolean = false;
  mostrarInfo: boolean = true;
  todayData: {} = '';
  todayIcon: string = '';
  weather: string = '';

  constructor(private weatherService: WeatherService) {}

  onSearch(city: string = this.city) {
    this.weatherService.getLocalization(city).subscribe(
      (resp) => {
        this.datos = resp;
        this.search.emit(this.datos);
      },
      (error) => {
        this.search.emit(['error']);
      }
    );
  }
}
