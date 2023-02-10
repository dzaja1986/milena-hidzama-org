import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DepilationComponent } from './depilation/depilation.component';
import { HeaderComponent } from './header/header.component';
import { CuppingTherapyComponent } from './cupping-therapy/cupping-therapy.component';
import { MassageComponent } from './massage/massage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { StartSideComponent } from './start-side/start-side.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DepilationComponent,
    HeaderComponent,
    CuppingTherapyComponent,
    MassageComponent,
    AboutMeComponent,
    StartSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
