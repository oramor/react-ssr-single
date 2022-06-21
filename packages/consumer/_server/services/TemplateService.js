"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const promises_1 = require("node:fs/promises");
class TemplateService {
    async render(path, obj) {
        // Node access checker
        await (0, promises_1.access)(path);
        // If encoding param passed, readFile returns Buffer
        const template = await (0, promises_1.readFile)(path, { encoding: 'utf-8' });
        /**
         * Метод compilier возвращает функцию, настроенную при помощи
         * не обязательного объекта параметро options.
         */
        const compilier = handlebars_1.default.compile(template);
        return compilier(obj);
    }
}
exports.TemplateService = TemplateService;
