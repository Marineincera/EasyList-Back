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
exports.Typeitem = void 0;
var typeorm_1 = require("typeorm");
var item_entity_1 = require("./item.entity");
var Typeitem = /** @class */ (function () {
    function Typeitem() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Typeitem.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], Typeitem.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], Typeitem.prototype, "creationDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], Typeitem.prototype, "icon", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return item_entity_1.Item; }, function (item) { return item.typeitem; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Typeitem.prototype, "items", void 0);
    Typeitem = __decorate([
        typeorm_1.Entity("typeitem")
    ], Typeitem);
    return Typeitem;
}());
exports.Typeitem = Typeitem;
