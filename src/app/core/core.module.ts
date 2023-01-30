import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './pages/featured/featured.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UiModule } from '../ui/ui.module';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { KilometerPipe } from './pipes/kilometers.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    FeaturedComponent,
    SidenavComponent,
    SearchComponent,
    LoadingComponent,
    FooterComponent,
    TemperaturePipe,
    KilometerPipe
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
   FooterComponent
  ]
})
export class CoreModule { }
