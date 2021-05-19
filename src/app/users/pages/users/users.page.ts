import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../../auth/interface/user-interface';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  roles = [
    {
      name: 'Administrador'
    },
    {
      name: 'Gerente'
    },
    {
      name: 'Empleado'
    }
  ];
  users: Observable<User[]>;
  allUsers: User[] = [];

  // Usuario a actualizar
  updateUser: User;

  constructor(private menu: MenuController,
              private formBuilder: FormBuilder,
              private userService: UserService ) {
    this.users = this.userService.getAllUsers();
    this.users
    .subscribe( users => {
      console.log( users );
      this.allUsers = users.filter( user => {
        return user.role !== 'Administrador';
      }); 
    });
  }

  form: FormGroup = this.formBuilder.group({
    role: [ '', [ Validators.required ] ]
  });

  ngOnInit() {
    // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first');
  }

  getUserRole( user: User ): void {
    this.updateUser = user;
    this.form.get('role').setValue( user.role );
  }

  onUpdateRole() {
    if( this.form.invalid ) {
      return;
    }

    this.updateUser.role = this.form.get('role').value;
    this.userService.updateUser( this.updateUser );
  }

  onDeleteUser( id:string ) {
    this.userService.deleteUser( id );
  }

  onToggleMenu() {
    this.menu.enable( true, 'first');
    this.menu.open('first');
  }
  
  

}
