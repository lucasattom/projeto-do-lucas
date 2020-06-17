import { BehaviorSubject } from 'rxjs';

export class NavigationService{
    aberta = false;
    sidenavAberta = new BehaviorSubject(false);

    toogleNavigation() {
        this.aberta = !this.aberta;
        this.sidenavAberta.next(this.aberta);
    }
}