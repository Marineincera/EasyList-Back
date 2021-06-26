"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypegroupService = void 0;
var abstract_service_1 = require("../core/abstract.service");
var typeorm_1 = require("typeorm");
var typegroup_repository_1 = require("../repositories/typegroup.repository");
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
var TypegroupService = /** @class */ (function (_super) {
    __extends(TypegroupService, _super);
    function TypegroupService() {
        var _this = _super.call(this) || this;
        _this.repository = typeorm_1.getCustomRepository(typegroup_repository_1.TypegroupRepository);
        return _this;
    }
    TypegroupService.prototype.getAll = function () {
        return this.repository.find();
    };
    return TypegroupService;
}(abstract_service_1.AbstractService));
exports.TypegroupService = TypegroupService;
