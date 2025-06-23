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
      
      if (expectedRole) {
        // Check if expectedRole is an array
        if (Array.isArray(expectedRole)) {
          // For arrays, check if user's role is included
          if (!expectedRole.includes(userRole)) {
            this.router.navigate(['/']);
            return false;
          }
        } else {
          // For single role, do direct comparison (backward compatibility)
          if (userRole !== expectedRole) {
            this.router.navigate(['/']);
            return false;
          }
        }
      }
      
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}