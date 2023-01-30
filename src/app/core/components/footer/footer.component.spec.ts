import { FooterComponent } from './footer.component';
describe('@FooterComponent', () => {

  let component: FooterComponent;

  beforeEach(() => {
    component = new FooterComponent();
  });

  describe('When initialize', ()=>{

    it('#Should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
