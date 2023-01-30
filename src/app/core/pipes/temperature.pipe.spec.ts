import { TemperaturePipe } from './temperature.pipe';

describe('@TemperaturePipe', ()=>{
  let pipe: TemperaturePipe;

  const text = '147';
  const celsius = true;

  beforeEach( ()=>{
    pipe = new TemperaturePipe();
  });

  it('#Should use transform correctly', ()=>{
    const newTest = pipe.transform(text)

    expect(newTest).toBe('147 °C');
  });

  it('#Should validate parameter celsius', ()=>{
    const newTest = pipe.transform(text, celsius);

    expect(newTest).toBe('-126.15 °C');
  });

});
