const Koa = require('koa');
const route = require('koa-route');
const static = require('koa-static');
const quote = require('get-random-quote');
const { translate } = require('pirate-speak');

const app = new Koa();

app.use(route.get('/quote', async (ctx) => {
  const { text, author } = await quote();

  ctx.body = {
    text: translate(text),
    author: `${translate(author)}, probably`,
  };
}));

app.use(static('dist'));

app.listen(8080);