import { of } from 'rxjs';
import { SidenavComponent } from './sidenav.component';

describe('@SidenavComponent', () => {
  const RESPONSE_WEATHER = {
    main: {
      temp_max: 26.06,
      temp_min: 21.14,
      humidity: 69,
      pressure: 984,
      temp: 26.06,
      feels_like: 26.06,
      sea_level: 1407,
    },
    name: 'Lima',
    sys: '',
    country: 'Peru',
    weather: [
      {
        description: '',
      },
    ],
  };
  const RESPONSE_FORECAST = [{
    main: {
      temp_max: 26.06,
      temp_min: 21.14,
      humidity: 69,
      pressure: 984,
      temp: 26.06,
      feels_like: 26.06,
      sea_level: 1407,
    },
    weather: [
      {
        description: '',
      },
    ],
    dt_txt: '06:00:00 2023-01-28'
  }];

  let component: SidenavComponent;
  const stubWeatherService = jasmine.createSpyObj('WeatherService', [
    'getLocalizationById',
    'getForecast',
  ]);

  beforeEach(() => {
    component = new SidenavComponent(stubWeatherService);
  });

  beforeEach(() => {
    stubWeatherService.getLocalizationById.and.returnValue(of(RESPONSE_WEATHER));
  });

  describe('When initialize', () => {
    it('#Should create', () => {
      expect(component).toBeTruthy();
    });

    it('#Should it call search', () => {
      const RESPONSE_WEATHER = {
        main: {
          temp_max: 26.06,
          temp_min: 21.14,
          humidity: 69,
          pressure: 984,
          temp: 26.06,
          feels_like: 26.06
        },
        name: 'Lima',
        sys: '',
        country: 'Peru',
        weather: [
          {
            description: '',
          },
        ],
      };
      stubWeatherService.getLocalizationById.and.returnValue(of(RESPONSE_WEATHER));

      component.search();


      expect(component.seaLevel).toBeFalse();
    });
  });

  describe('When searchByName', () => {
    it('#Should showError', () => {
      component.searchByName('error');

      expect(component.showError).toBe(true);
    });

    it('#Should not showError', () => {
      const city = {
        id: '3936456'
      };

      component.searchByName(city);

      expect(component.showError).toBe(false);
    });
  });

  describe('When getForecast', () => {
    it('#Should it call formatDate', () => {
      stubWeatherService.getForecast.and.returnValue(of(RESPONSE_FORECAST));
      spyOn(component, 'formatDate').and.callThrough()

      component.getForecast(3936456);

      expect(component.formatDate).toHaveBeenCalled();
    });

    it('#Should validate that includes date', () => {
      stubWeatherService.getForecast.and.returnValue(of(RESPONSE_FORECAST));
      spyOn(component, 'formatDate').and.callFake(()=>'2023-01-28');

      component.getForecast(3936456);

      expect(component.formatDate).toHaveBeenCalled();
    });
  });

});

