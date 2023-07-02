import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BooksCardComponent } from './books-card/books-card.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { LandPageComponent } from './land-page/land-page.component';
import { CadastroBookComponent } from './cadastro-book/cadastro-book.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    SegundoComponenteComponent,
    MenuBarComponent,
    BooksCardComponent,
    ProjectsCardComponent,
    TodoCardComponent,
    LandPageComponent,
    CadastroBookComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
