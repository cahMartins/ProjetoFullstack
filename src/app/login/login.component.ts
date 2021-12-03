import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //Agrupamento de campos em um formulario
  form:FormGroup;
  emailFormControl = this.fb.control('', {validators:[Validators.required], updateOn: 'blur'});
  senhaFormControl = this.fb.control('', {validators:[Validators.required], updateOn: 'blur'});


  constructor(private usuarioService: UsuarioService,
    private clienteService: ClienteService,
    private Router: Router,
    private fb: FormBuilder) { 
      this.form = this.fb.group({
        emailFormControl: this.emailFormControl,
        senhaFormControl: this.senhaFormControl
      });
    }

  ngOnInit(): void {
  }

  logar(){
    if(this.form.valid){
      let userMaster: Usuario = new Usuario();
      userMaster.email = this.emailFormControl.value;
      userMaster.senha = this.senhaFormControl.value;
      this.usuarioService.login(userMaster).subscribe((usuarioMasterIn: Usuario)=>{
        this.usuarioService.usuarioLogado = usuarioMasterIn;
        this.Router.navigate(["/"]);
      }, (error: any)=>{
        let cliente: Cliente = new Cliente();
        cliente.email = this.emailFormControl.value;
        cliente.senha = this.senhaFormControl.value;
        this.clienteService.login(cliente).subscribe((cliente: Cliente)=>{
          this.clienteService.cliente = cliente;
          this.Router.navigate(["/"]);
        }, (error)=>{
          alert("Email ou senha invalida!");
        })
      })
    }
  }
  cadastrar(){
    this.Router.navigate(["/cadastrar"]);
  }

}
