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
exports.__esModule = true;
var BusinessUnit;
(function (BusinessUnit) {
    BusinessUnit["Dev"] = "Dev";
    BusinessUnit["QA"] = "QA";
    BusinessUnit["MS"] = "MS";
    BusinessUnit["IMS"] = "IMS";
})(BusinessUnit = exports.BusinessUnit || (exports.BusinessUnit = {}));
var Person = /** @class */ (function () {
    function Person(name, bu) {
        this.name = name;
        this.bu = bu;
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.name + ". You have been assigned to " + this.bu + ".");
    };
    return Person;
}());
exports["default"] = Person;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, bu) {
        return _super.call(this, name, bu) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("I am a manager and I delegate work");
    };
    return Manager;
}(Person));
exports.Manager = Manager;
