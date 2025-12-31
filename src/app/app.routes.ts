import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { Skill } from './skill/skill';
import { Contact} from './contact/contact';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'skills', component: Skill }, 
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  {path: 'about', component: About}, 
  { path: 'resume', redirectTo: 'prathyudhpremap.pdf', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

