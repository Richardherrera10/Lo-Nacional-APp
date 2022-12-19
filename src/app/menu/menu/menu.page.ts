import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private userService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.logout()
      .then(response => {
        this.router.navigate(['/main-page'])
      })
      .catch(error => console.log(error));
  }
}
