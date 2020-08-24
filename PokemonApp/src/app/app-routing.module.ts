import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { UserComponent } from './components/user/user.component';
import { UserRolComponent } from './components/user-rol/user-rol.component';


const ROUTES: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[ AuthGuard ] },
  { path: 'register', component: RegisterComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'listPokemon', component: ListPokemonComponent , canActivate:[ AuthGuard ] },
  { path: 'detailPokemon/:id', component:DetailPokemonComponent, canActivate:[ AuthGuard ] },
  { path: 'userRol', component: UserRolComponent,canActivate:[ AuthGuard ]},
  { path: 'user', component:UserComponent,canActivate:[ AuthGuard ]},
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING = RouterModule.forRoot(ROUTES,{  useHash: true });
