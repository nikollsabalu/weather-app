import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { WeatherService } from './weather.service';



describe('@WeatherService', ()=>{

  const url = 'https://api.openweathermap.org/data/2.5/';
  const appid = 'c5f248cf6997639f517862cb5cfe8ba9';
  const units = 'metric';
  const lang = 'en';
  const nombre = 'lima';
  const id  = 3936456;

  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[
        WeatherService
      ],
      schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
  });

  beforeEach(()=>{
   service = TestBed.inject(WeatherService);
   httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(()=>{
    httpMock.verify();
  });

  describe('When getLocalization', ()=> {
    it('#Should returns the request method', ()=>{
      service.getLocalization('lima').subscribe();

      const req = httpMock.expectOne(`${url}weather?q=${nombre}&appid=${appid}&units=${units}&lang=${lang}`);

      expect(req.request.method).toBe('GET');
    });
  });

  describe('When getLocalizationById', ()=> {
    it('#Should returns the request method', ()=>{
      service.getLocalizationById('3936456').subscribe();

      const req = httpMock.expectOne(`${url}weather?id=${id}&appid=${appid}&units=${units}&lang=${lang}`);

      expect(req.request.method).toBe('GET');
    });
  });

  describe('When getForecast', ()=> {
    it('#Should returns the request method', ()=>{
      service.getForecast(3936456).subscribe();

      const req = httpMock.expectOne(`${url}forecast?id=${id}&appid=${appid}`);

      expect(req.request.method).toBe('GET');
    });
  });

});
