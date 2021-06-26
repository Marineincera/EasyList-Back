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
exports.Groupdemand = exports.StatusGroupdemand = void 0;
var typeorm_1 = require("typeorm");
var groupevent_entity_1 = require("./groupevent.entity");
var user_entity_1 = require("./user.entity");
var StatusGroupdemand;
(function (StatusGroupdemand) {
    StatusGroupdemand["WAITING"] = "waiting";
    StatusGroupdemand["ACCEPTED"] = "accepted";
    StatusGroupdemand["DECLINED"] = "declined";
})(StatusGroupdemand = exports.StatusGroupdemand || (exports.StatusGroupdemand = {}));
var Groupdemand = /** @class */ (function () {
    function Groupdemand() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Groupdemand.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], Groupdemand.prototype, "creationDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "enum", enum: StatusGroupdemand, default: StatusGroupdemand.WAITING }),
        __metadata("design:type", String)
    ], Groupdemand.prototype, "statusGroupdemand", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return groupevent_entity_1.Groupevent; }, function (groupevent) { return groupevent.groupdemands; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", groupevent_entity_1.Groupevent)
    ], Groupdemand.prototype, "groupevent", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.groupdemands; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", user_entity_1.User)
    ], Groupdemand.prototype, "asker", void 0);
    Groupdemand = __decorate([
        typeorm_1.Entity("groupdemand")
    ], Groupdemand);
    return Groupdemand;
}());
exports.Groupdemand = Groupdemand;
