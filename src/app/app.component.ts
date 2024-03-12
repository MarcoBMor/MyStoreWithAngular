import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'LandingPage';
  menuOption:string = '';
  transparentNav: boolean = false;
  scrolled: boolean = false;
  currentUrl:string = '';

  private _route = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.currentUrl === "/"){
      if (window.scrollY > 50) {
        this.transparentNav = false;
      } else {
        this.transparentNav = true;
      }
    }
  }

  ngOnInit(): void {
    this._route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }

      if(this.currentUrl !== '/'){
        this.transparentNav = false;
        this.scrolled = false;
      }else{
        this.transparentNav = true;
        this.scrolled = true;
      }
    });
  }

  onOption(menuOption: string){
    this.menuOption = menuOption;
  }

}
