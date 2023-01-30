import { KilometerPipe } from './kilometers.pipe';

describe('@KilometerPipe', ()=>{
  let pipe: KilometerPipe;

  const value = 140000;

  beforeEach( ()=>{
    pipe = new KilometerPipe();
  });

  it('#Should use transform correctly', ()=>{
    const newValue = pipe.transform(value);

    expect(newValue).toBe(140);
  });

});
