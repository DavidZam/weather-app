import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const APPID: string = environment.APPID || '';

  const authReq = req.clone({
    setParams: {
      APPID,
    },
  });

  return next(authReq);
};
