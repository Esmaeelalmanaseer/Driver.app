import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogIn } from '../Models/LogIn';
import { Register } from '../Models/Register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../Models/JwtAuth';
@Injectable({
  providedIn: 'root'
})
export class AuthntenticatService {
registerurl="api/Auth/Regstir";
loginurl="api/Auth/LogIn";
witherurl="api/WeatherForecast"
  constructor(private http:HttpClient) { }
  public register(user:Register):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(environment.apiUrl+'/'+this.registerurl,user);
  }
  public Login(user:LogIn):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(environment.apiUrl+'/'+this.loginurl,user);
  }
  public wither():Observable<any>
  {
    return this.http.get<any>(environment.apiUrl+'/'+this.witherurl)
  }
}
