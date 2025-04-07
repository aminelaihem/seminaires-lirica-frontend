import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  welcomeMessage: string = "Bienvenue à la plateforme des Séminaires Lirica";

  constructor() { }

  ngOnInit(): void { }
}
