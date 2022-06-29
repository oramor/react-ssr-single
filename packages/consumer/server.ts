//import Fastify, { FastifyInstance } from 'fastify';
import { MainPageServ } from './pages/MainPage/MainPageServ.js';
import { TemplateService } from './services/TemplateService.js';
import path from 'path';
import config from './config.js';

const page = new MainPageServ();
const placeholders = page.placeholders;

// Handlebars
const fileName = 'MainPage.hbs';
const filePath = path.join(config.paths.rootDir, config.paths.viewsDir, fileName);
const templateService = new TemplateService();

templateService
    .render(filePath, placeholders)
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
