import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  darkMode: boolean = true;

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

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;

  } // Constructor

  // Activar / desactivar tema oscuro
  toggleDarkTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  ngOnInit() {}

  onLogOut() {
    this.authService.logout();
  }
}
