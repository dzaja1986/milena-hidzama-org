import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CuppingTherapyComponent } from './cupping-therapy/cupping-therapy.component';
import { DepilationComponent } from './depilation/depilation.component';
import { MassageComponent } from './massage/massage.component';
import { StartSideComponent } from './start-side/start-side.component';

const routes: Routes = [
  { path: '', component: StartSideComponent },
  { path: 'o-meni', component: AboutMeComponent },
  { path: 'hidzama', component: CuppingTherapyComponent },
  { path: 'depilacija', component: DepilationComponent },
  { path: 'masaze', component: MassageComponent },
  { path: 'kontakt', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
