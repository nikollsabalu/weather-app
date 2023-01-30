import { FeaturedComponent } from './featured.component';
describe('@FeaturedComponent', () => {

  let component: FeaturedComponent;

  beforeEach(() => {
    component = new FeaturedComponent();
  });

  describe('When initialize', ()=>{

    it('#Should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
