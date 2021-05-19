import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interface/user-interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  user: string = '';
  userRole: string = '';
  constructor(
    private authService: AuthService) {
    if ( this.authService.user$ ) {
      this.authService.user$.subscribe( user => {
        if ( user ) {
          this.user = `${ user.name } ${ user.lastName }`;
          this.userRole = user.role;
        } else {
          this.user = '';
        }
      });
    }
  }
  ngOnInit() {}

  onLogOut() {
    this.authService.logout();
  }
}
