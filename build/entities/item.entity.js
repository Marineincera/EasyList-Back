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
exports.Item = exports.ItemStatus = exports.LevelItem = void 0;
var typeorm_1 = require("typeorm");
var list_entity_1 = require("./list.entity");
var typeitem_entity_1 = require("./typeitem.entity");
var user_entity_1 = require("./user.entity");
var LevelItem;
(function (LevelItem) {
    LevelItem["LEVEL_ONE"] = "levelOne";
    LevelItem["LEVEL_TWO"] = "levelTwo";
    LevelItem["LEVEL_THREE"] = "levelThree";
    LevelItem["LEVEL_UNDEFINED"] = "levelUndefined";
})(LevelItem = exports.LevelItem || (exports.LevelItem = {}));
var ItemStatus;
(function (ItemStatus) {
    ItemStatus["ITEM_WAITING"] = "itemWaiting";
    ItemStatus["ITEM_OFFERED"] = "itemOffered";
})(ItemStatus = exports.ItemStatus || (exports.ItemStatus = {}));
var Item = /** @class */ (function () {
    function Item() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Item.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 205, nullable: false }),
        __metadata("design:type", String)
    ], Item.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: Date, nullable: true }),
        __metadata("design:type", Date)
    ], Item.prototype, "creationDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 505, nullable: true }),
        __metadata("design:type", String)
    ], Item.prototype, "picture", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 505, nullable: true }),
        __metadata("design:type", String)
    ], Item.prototype, "link", void 0);
    __decorate([
        typeorm_1.Column({ type: "enum", enum: LevelItem, default: LevelItem.LEVEL_UNDEFINED }),
        __metadata("design:type", String)
    ], Item.prototype, "levelItem", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 505, nullable: true }),
        __metadata("design:type", String)
    ], Item.prototype, "indications", void 0);
    __decorate([
        typeorm_1.Column({ type: "enum", enum: ItemStatus, default: ItemStatus.ITEM_WAITING }),
        __metadata("design:type", String)
    ], Item.prototype, "itemStatus", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return list_entity_1.List; }, function (list) { return list.items; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Item.prototype, "lists", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.items; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", user_entity_1.User)
    ], Item.prototype, "owner", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_entity_1.User; }, function (user) { return user.basket; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", user_entity_1.User)
    ], Item.prototype, "buyer", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return typeitem_entity_1.Typeitem; }, function (typeitem) { return typeitem.items; }, { onDelete: 'CASCADE' }),
        __metadata("design:type", typeitem_entity_1.Typeitem)
    ], Item.prototype, "typeitem", void 0);
    Item = __decorate([
        typeorm_1.Entity("item")
    ], Item);
    return Item;
}());
exports.Item = Item;
