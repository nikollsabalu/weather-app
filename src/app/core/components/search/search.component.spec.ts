import { of, throwError } from 'rxjs';
import { SearchComponent } from './search.component';
describe('@SearchComponent', () => {

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

  let component: SearchComponent;
  const stubWeatherService = jasmine.createSpyObj('WeatherService', [
    'getLocalization',
  ]);

  beforeEach(() => {
    component = new SearchComponent(stubWeatherService);
    });

  describe('When onSearch', ()=>{

    it('#Should returns response', () => {
      stubWeatherService.getLocalization.and.returnValue(of(RESPONSE_WEATHER));

      component.onSearch();

      expect(stubWeatherService.getLocalization).toHaveBeenCalled();
    });

    it('#Should thowError', () => {
      stubWeatherService.getLocalization.and.returnValue(throwError(() => {}));

      component.onSearch();

      expect(stubWeatherService.getLocalization).toHaveBeenCalled();
    });

  });
});
