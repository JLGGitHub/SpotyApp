import {Routes} from '@angular/router'
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ArtistaComponent } from './componentes/artista/artista.component';


export const rutas: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'artista/:id', component: ArtistaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];