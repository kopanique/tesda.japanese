import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/learn/learn.component';
import { AudioBooksComponent } from './pages/learn/audio-books/audio-books.component';
import { PdfFilesComponent } from './pages/learn/pdf-files/pdf-files.component';
import { VideosComponent } from './pages/learn/videos/videos.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavigationBarComponent } from './commons/navigation-bar/navigation-bar.component';
import { FooterComponent } from './commons/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    AudioBooksComponent,
    PdfFilesComponent,
    VideosComponent,
    PhotoGalleryComponent,
    AboutUsComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
