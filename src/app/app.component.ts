import { Component, Inject, OnInit } from '@angular/core';
import { StorageService } from './_services/token-storage.service';
import { AuthService } from './_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
  count : number = 0;
  currentUser : any;
  showModeratorBoard: boolean;

  constructor(@Inject(StorageService) public  storageService: StorageService, private authService: AuthService ) { }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      // this.notifications = user.no
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    
  }

  logout(): void {
    this.authService.signOut();
    window.location.reload();
      }
    }