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
exports.Child = void 0;
var typeorm_1 = require("typeorm");
var list_entity_1 = require("./list.entity");
var user_entity_1 = require("./user.entity");
var Child = /** @class */ (function () {
    function Child() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Child.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], Child.prototype, "pseudo", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], Child.prototype, "registrationDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 505, nullable: true }),
        __metadata("design:type", String)
    ], Child.prototype, "avatar", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return list_entity_1.List; }, function (list) { return list.childOwner; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Child.prototype, "lists", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (User) { return User.children; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", user_entity_1.User)
    ], Child.prototype, "creator", void 0);
    Child = __decorate([
        typeorm_1.Entity("child")
    ], Child);
    return Child;
}());
exports.Child = Child;
