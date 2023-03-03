import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'hero-info', component: HeroInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
