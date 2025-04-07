import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Seminaire } from '../seminaire.model';
import { SeminairesService } from '../seminaires.service';

@Component({
  selector: 'app-seminaires-list',
  templateUrl: './seminaires-list.component.html',
  styleUrls: ['./seminaires-list.component.css']
})
export class SeminairesListComponent implements OnInit {
  seminaires: Seminaire[] = [];

  constructor(
    private seminairesService: SeminairesService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.seminairesService.getSeminaires().subscribe(
      (data: Seminaire[]) => {
        this.seminaires = data;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des séminaires', error);
      }
    );
  }

  onMouseEnter(event: Event): void {
    const card = event.target as HTMLElement;
    this.renderer.addClass(card, 'hovered');
  }

  onMouseLeave(event: Event): void {
    const card = event.target as HTMLElement;
    this.renderer.removeClass(card, 'hovered');
  }
}
