import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import router from './routes';
export enum ApplicationEvent {
  KoaMiddlewareError = 'KoaMiddlewareError',
}

export const koaMiddlewareErrorHandler = (
  error: Error,
  ctx: Koa.Context
): void => {
  console.log('Koa Middleware Error', { error, ctx });
};

const app = new Koa();

app.use(
  bodyParser({
    jsonLimit: '1mb',
    formLimit: '1mb',
    textLimit: '1mb',
  })
);
app.use(router.routes()).use(router.allowedMethods());

app.on(ApplicationEvent.KoaMiddlewareError, koaMiddlewareErrorHandler);

export default app;
