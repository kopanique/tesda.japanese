import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { AudioBooksComponent } from './pages/learn/audio-books/audio-books.component';
import { PdfFilesComponent } from './pages/learn/pdf-files/pdf-files.component';
import { VideosComponent } from './pages/learn/videos/videos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'learn/audio-books', component: AudioBooksComponent },
  { path: 'learn/videos', component: VideosComponent },
  { path: 'learn/pdf-files', component: PdfFilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
