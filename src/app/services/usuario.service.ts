import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioLogado!: Usuario;
  constructor(private http: HttpClient) { }

  post(usuario: Usuario){
    return this.http.post<Usuario>(`${environment.baseApiUrl}/usuario`, usuario);
  }

  login(usuario: Usuario){
    return this.http.post<Usuario>(`${environment.baseApiUrl}/usuario/login`, usuario);
  }

  put(usuario: Usuario){
    return this.http.put<Usuario>(`${environment.baseApiUrl}/usuario`, usuario);
  }

  getPeloId(id: number){
    return this.http.get<Usuario>(`${environment.baseApiUrl}/usuario/${id}`);
  }

  get(){
    return this.http.get<Usuario[]>(`${environment.baseApiUrl}/usuario`);
  }
}
