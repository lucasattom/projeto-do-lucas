import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { VerificarCadastroComponent } from './auth/verificar-cadastro/verificar-cadastro.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'verificar-cadastro', component: VerificarCadastroComponent},
    {path: 'conteudo', component: ConteudoComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}