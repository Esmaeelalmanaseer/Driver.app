import { Component } from '@angular/core';
import {LogIn} from './Models/LogIn'
import { Register } from './Models/Register';
import { JwtAuth } from './Models/JwtAuth';
import { AuthntenticatService } from './services/authntenticat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Driver.app';
  logindto=new LogIn();
  registerdto=new Register();
  jwtAuthdto=new JwtAuth();

  constructor (private authService :AuthntenticatService ) {
    
  }
  register(registerdto:Register){
    this.authService.register(registerdto).subscribe();
  }
  Login(logindto:LogIn)
  {
    this.authService.Login(logindto).subscribe(jwtAuthdto=>
      {
        localStorage.setItem('jwtToken',jwtAuthdto.token)
      });
  }
  wither(){
    this.authService.wither().subscribe((whetherdata:any)=>{
      console.log(whetherdata);
    })
  }
}
