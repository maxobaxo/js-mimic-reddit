import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FunnyComponent } from './funny/funny.component';
import { WoahdudeComponent } from './woahdude/woahdude.component';
import { FacepalmComponent } from './facepalm/facepalm.component';
import { WorldnewsComponent } from './worldnews/worldnews.component';
import { NatureisfuckinglitComponent } from './natureisfuckinglit/natureisfuckinglit.component';
import { MuckingFagicalComponent } from './mucking-fagical/mucking-fagical.component';
import { ScienceComponent } from './science/science.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'funny',
    component: FunnyComponent
  },
  {
    path: 'woahdude',
    component: WoahdudeComponent
  },
  {
    path: 'facepalm',
    component: FacepalmComponent
  },
  {
    path: 'worldnews',
    component: WorldnewsComponent
  },
  {
    path: 'natureisfuckinglit',
    component: NatureisfuckinglitComponent
  },
  {
    path: 'muckingfagical',
    component: MuckingFagicalComponent
  },
  {
    path: 'science',
    component: ScienceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
