import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidatorFn,
  AsyncValidatorFn,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  formCad = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senhas: new FormGroup(
      {
        senha: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confSenha: new FormControl('', [Validators.required]),
      },
      [this.senhasMatch()]
    ),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  noCadastro() {
    this.authService.cadastrar(
      this.formCad.value.email,
      this.formCad.value.senhas.senha
    );
  }

  senhasMatch(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: string } | null => {
      const iguais = group.get('confSenha').value == group.get('senha').value;
      return iguais ? null : { senhasDiferentes: 'Senhas diferentes' };
    };
  }
}
