import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable()
export class AnonGuard implements CanActivate {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.sessionService.me().then((user) => {
      if (!user) {
        return true;
      } else {
        this.router.navigate(['/trips']);
      }
    });
  }
}
