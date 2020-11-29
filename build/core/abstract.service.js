"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractService = void 0;
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
var AbstractService = /** @class */ (function () {
    function AbstractService() {
    }
    // Business logic
    AbstractService.prototype.getAll = function () {
        return this.repository.find();
    };
    AbstractService.prototype.getById = function (id) {
        return this.repository.findOne(id);
    };
    AbstractService.prototype.add = function (element) {
        return this.repository.save(element);
    };
    AbstractService.prototype.update = function (idElement, element) {
        return this.repository.update(idElement, element);
    };
    AbstractService.prototype.delete = function (id) {
        return this.repository.delete(id);
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;
