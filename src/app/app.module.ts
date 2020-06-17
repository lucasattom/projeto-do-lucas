import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule} from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { VerificarCadastroComponent } from './auth/verificar-cadastro/verificar-cadastro.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { NavigationService } from './navigation/navigation.service';
import { DadosPessoaisComponent } from './conteudo/dados-pessoais/dados-pessoais.component';
import { ConteudoService } from './conteudo/conteudo.service';
import { EstadoComponent } from './conteudo/estado/estado.component';
import { NgxsModule } from '@ngxs/store';
import { ConteudoState } from './conteudo/conteudo.state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    WelcomeComponent,
    VerificarCadastroComponent,
    ConteudoComponent,
    DadosPessoaisComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxsModule.forRoot([ConteudoState])
  ],
  providers: [AuthService, NavigationService, ConteudoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
