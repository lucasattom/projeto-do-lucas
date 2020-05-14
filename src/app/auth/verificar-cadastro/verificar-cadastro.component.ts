import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-cadastro',
  templateUrl: './verificar-cadastro.component.html',
  styleUrls: ['./verificar-cadastro.component.css']
})
export class VerificarCadastroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  enviarVerificacao() {
    if(this.authService.user) {
      this.authService.verificarUser()
    } else {
      this.router.navigate(['/cadastro'])
    }
  }

}
