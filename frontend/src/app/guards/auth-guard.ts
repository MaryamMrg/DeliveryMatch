import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree,
  Router 
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 
    
 constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isLoggedIn()) {
      
      const expectedRole = route.data['expectedRole'];
      const userRole = this.authService.getRole();
      
      if (expectedRole && userRole !== expectedRole) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}