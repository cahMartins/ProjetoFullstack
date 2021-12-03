import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { Endereco } from '../models/endereco.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente!: Cliente;
  form!:FormGroup;
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cpfFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  dataNascimetoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  emailFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  senhaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  ruaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  numeroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  complementoFormControl = this.fb.control('', { validators: [], updateOn: 'blur' });
  bairroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cidadeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cepFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });


  constructor(private router: Router,
    private fb: FormBuilder,
    private clienteService: ClienteService) {
    this.form = this.fb.group({
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.cpfFormControl,
      dataNascimetoFormControl: this.dataNascimetoFormControl,
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl,
      ruaFormControl: this.ruaFormControl,
      numeroFormControl: this.numeroFormControl,
      complementoFormControl: this.complementoFormControl,
      bairroFormControl: this.bairroFormControl,
      cidadeFormControl: this.cidadeFormControl,
      cepFormControl: this.cepFormControl
    });
  }

  ngOnInit(): void {
  
  }

  salvar() {
    if (this.form.valid) {
      if (this.cliente == undefined || this.cliente == null)
        this.cliente = new Cliente();
      this.cliente.nome = this.nomeFormControl.value;
      this.cliente.cpf = this.cpfFormControl.value;
      this.cliente.dataNascimento = this.dataNascimetoFormControl.value;
      this.cliente.email = this.emailFormControl.value;
      this.cliente.senha = this.senhaFormControl.value;
      if (this.cliente.endereco == undefined || this.cliente.endereco == null)
        this.cliente.endereco = new Endereco();
      this.cliente.endereco.bairro = this.bairroFormControl.value;
      this.cliente.endereco.cep = this.cepFormControl.value;
      this.cliente.endereco.cidade = this.cidadeFormControl.value;
      this.cliente.endereco.complemento = this.complementoFormControl.value;
      this.cliente.endereco.numero = this.numeroFormControl.value;
      this.cliente.endereco.rua = this.ruaFormControl.value;

      if (this.cliente.id == undefined || this.cliente.id == 0)
        this.clienteService.post(this.cliente).subscribe(() => {

        });
      }
    }

}
