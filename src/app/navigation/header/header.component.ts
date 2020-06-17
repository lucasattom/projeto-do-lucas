import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService: AuthService, private navigationService: NavigationService) { }

  onLogout() {
    this.authService.logout();
  }

  onToggleSidenav() {
    this.navigationService.toogleNavigation();
  }
}
