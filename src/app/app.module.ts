import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { ArtistasComponent } from './componentes/artistas/artistas.component';
import { NavegacionComponent } from './componentes/compartidos/navegacion/navegacion.component';

// Import de las rutas 
import { rutas } from './app.rutas';

// Impor de los servios
import { SpotifyService } from './servicios/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { NoImagenPipe } from './pipes/no-imagen.pipe';
import { TarjetasComponent } from './componentes/compartidos/tarjetas/tarjetas.component';
import { KeyvaultService } from './servicios/keyvault.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BuscarComponent,
    ArtistaComponent,
    ArtistasComponent,
    NavegacionComponent,
    NoImagenPipe,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas, {useHash:true})
  ],
  providers: [
    SpotifyService,
    KeyvaultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
