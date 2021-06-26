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
exports.Groupevent = void 0;
var typeorm_1 = require("typeorm");
var groupdemand_entity_1 = require("./groupdemand.entity");
var typegroup_entity_1 = require("./typegroup.entity");
var user_entity_1 = require("./user.entity");
var Groupevent = /** @class */ (function () {
    function Groupevent() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Groupevent.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], Groupevent.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], Groupevent.prototype, "creationDate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return typegroup_entity_1.Typegroup; }, function (typegroup) { return typegroup.groupevents; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", typegroup_entity_1.Typegroup)
    ], Groupevent.prototype, "typegroup", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.groupeventsManaged; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", user_entity_1.User)
    ], Groupevent.prototype, "admin", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return user_entity_1.User; }, function (user) { return user.groupeventsList; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Groupevent.prototype, "members", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return groupdemand_entity_1.Groupdemand; }, function (groupdemand) { return groupdemand.groupevent; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", Array)
    ], Groupevent.prototype, "groupdemands", void 0);
    Groupevent = __decorate([
        typeorm_1.Entity("groupevent")
    ], Groupevent);
    return Groupevent;
}());
exports.Groupevent = Groupevent;
