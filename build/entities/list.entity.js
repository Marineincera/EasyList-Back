"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.StatusList = void 0;
var typeorm_1 = require("typeorm");
var child_entity_1 = require("./child.entity");
var item_entity_1 = require("./item.entity");
var typelist_entity_1 = require("./typelist.entity");
var user_entity_1 = require("./user.entity");
var StatusList;
(function (StatusList) {
    StatusList["PUBLIC"] = "public";
    StatusList["PRIVATE"] = "private";
})(StatusList = exports.StatusList || (exports.StatusList = {}));
var List = /** @class */ (function () {
    function List() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], List.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], List.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], List.prototype, "creationDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "enum", enum: StatusList, default: StatusList.PUBLIC }),
        __metadata("design:type", String)
    ], List.prototype, "statusList", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.lists; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", user_entity_1.User)
    ], List.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return child_entity_1.Child; }, function (child) { return child.lists; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", child_entity_1.Child)
    ], List.prototype, "childOwner", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return typelist_entity_1.Typelist; }, function (typelist) { return typelist.lists; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", typelist_entity_1.Typelist)
    ], List.prototype, "typelist", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return item_entity_1.Item; }, function (item) { return item.lists; }),
        __metadata("design:type", Array)
    ], List.prototype, "items", void 0);
    List = __decorate([
        typeorm_1.Entity("list")
    ], List);
    return List;
}());
exports.List = List;
