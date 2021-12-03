import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ReportScreenComponent } from './report-screen/report-screen.component';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {path : 'cadastrar', component:CadastroComponent},
  {path : 'produtos', component:ProdutosComponent},
  {path : 'carrinho', component:CarrinhoComponent},
  {path : 'reports', component:ReportScreenComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
