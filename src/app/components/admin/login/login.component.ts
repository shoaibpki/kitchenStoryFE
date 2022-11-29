import { UserServiceService } from './../../../service/user-service.service';
import { Iadmin } from './../../../interface/iadmin';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  _admin!: Iadmin 
  responseData: any = '';


  constructor(
    private userService: UserServiceService,
    private activatedRoute: ActivatedRoute
    ){}

  getUser(userForm: NgForm){
    let uname: string = userForm.value['username']
    let pass: string = userForm.value['password']
    // let respo = this.userService.getAdmin();
    console.log("Before getting role.");
    this.responseData = this.activatedRoute.params.subscribe(params => {
      this.userService.getAdmin().subscribe( data => {
        return data
      })
    })
    console.log(this.responseData);
  }
}
