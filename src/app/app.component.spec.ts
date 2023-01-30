import { AppComponent } from './app.component';

describe('@AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it(`#Should have as title 'weather-app'`, () => {
    expect(component.title).toEqual('weather-app');
  });

});
