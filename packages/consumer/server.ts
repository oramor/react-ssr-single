//import Fastify, { FastifyInstance } from 'fastify';
import { MainPageServ } from './pages/MainPage/MainPageServ';
import { TemplateService } from './services/TemplateService';
console.log('-------------');
const page = new MainPageServ();
const placeholders = page.placeholders;
// Handlebars
const fileDir = '/home/romaro/react-ssr-single/packages/consumer/pages/MainPage/';
const fileName = 'MainPage.hbs';
const path = fileDir + fileName;
const templateService = new TemplateService();

templateService
    .render(path, placeholders)
    .then((rs) => console.log(rs))
    .catch((err) => console.log(err.message));

// Fastify

// const engine: FastifyInstance = Fastify({
//     logger: false,
// });

// engine.get('/', (_req, res) => {
//     res.send({ hello: 'world' });
// });

// engine.listen({ port: 3000 }, (err) => {
//     if (err) throw err;
// });
