"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import Fastify, { FastifyInstance } from 'fastify';
const MainPageServ_1 = require("../web/pages/MainPage/MainPageServ");
const TemplateService_1 = require("./TemplateService");
const page = new MainPageServ_1.MainPageServ();
const placeholders = page.placeholders;
// Handlebars
const fileDir = '/home/romaro/react-ssr/packages/web/pages/MainPage/';
const fileName = 'MainPage.hbs';
const path = fileDir + fileName;
const templateService = new TemplateService_1.TemplateService();
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
