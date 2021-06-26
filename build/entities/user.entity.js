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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var child_entity_1 = require("./child.entity");
var groupdemand_entity_1 = require("./groupdemand.entity");
var groupevent_entity_1 = require("./groupevent.entity");
var item_entity_1 = require("./item.entity");
var list_entity_1 = require("./list.entity");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "pseudo", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], User.prototype, "registrationDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 505, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return list_entity_1.List; }, function (list) { return list.creator; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], User.prototype, "lists", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return child_entity_1.Child; }, function (child) { return child.creator; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], User.prototype, "children", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return item_entity_1.Item; }, function (item) { return item.owner; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], User.prototype, "items", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return item_entity_1.Item; }, function (item) { return item.buyer; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], User.prototype, "basket", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return groupevent_entity_1.Groupevent; }, function (groupevent) { return groupevent.admin; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], User.prototype, "groupeventsManaged", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return groupevent_entity_1.Groupevent; }, function (groupevent) { return groupevent.members; }),
        __metadata("design:type", Array)
    ], User.prototype, "groupeventsList", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return groupdemand_entity_1.Groupdemand; }, function (groupdemand) { return groupdemand.asker; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], User.prototype, "groupdemands", void 0);
    User = __decorate([
        typeorm_1.Entity("user")
    ], User);
    return User;
}());
exports.User = User;
