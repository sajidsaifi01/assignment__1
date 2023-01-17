/*Q5) Write a decorator function/class in Django or KoaJS which when applied to a (Django View)
or (KoaJS Controller), returns 405 HTTP error on a GET request but behaves normally on
POST.*/


const Koa = require('koa'); 
const Router = require('@koa/router');
const render = require('koa-ejs');
const path = require('path');
const PORT =  6000;

const app = new Koa();
const router = new Router();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'index',
  viewExt: 'html',
  cache: false,
  debug: true
});

// TO see the 405 error please set get method while hitting the url...
router.get('get-route', '/', (ctx) => {
    function firstFunction(fn) {
        return function (arg) {
            var message = arg ;
            fn(message);
        }
    }
    function print(value) {
        ctx.throw(405, value);
    }
    var callFunction = firstFunction(print);  
    callFunction('Method Not Allowed'); 
    
});

// TO see the 200 success response please set post method while hitting the url...
router.post('post-example', '/', (ctx) => {
    function firstFunction(fn) {
        return function (arg) {
            var message = arg ;
            fn(message);
        }
    }
    function print(value) {
        ctx.throw(200, value);
    }
    var callFunction = firstFunction(print);   
    callFunction('Response Successfully'); 
    
});

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
