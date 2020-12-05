import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
