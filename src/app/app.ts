import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigateByUrl('/landing');
  }
  handleHome() {
    this.router.navigateByUrl('/landing');
  }

  handleClick() {
    this.router.navigateByUrl('/carbonara');
  }

  handleClick1() {
    this.router.navigateByUrl('/risottotastasal');
  }

  handleClick2() {
    this.router.navigateByUrl('/pizzoccheri');
  }
}
