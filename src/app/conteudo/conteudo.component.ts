import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
})
export class ConteudoComponent implements OnInit, OnDestroy {
  toggle = false;
  sub: Subscription;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.sub = this.navService.sidenavAberta.subscribe((result) => {
      this.toggle = result;
    });
  }

  fecharSidenav() {
    if(this.toggle){
      this.navService.toogleNavigation();

    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
