"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var id = 5;
var company = 'traversy Media';
var isPublised = true;
var x = 'Hello';
var age;
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'hello'];
//Tuple
var person = [1, 'Peter', true];
//Tuple array
var employer;
employer = [
    [1, 'Brad'],
    [4, 'Peter']
];
// Union 
var pid;
pid = 22;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
var user = {
    id: 1,
    name: 'Peter'
};
// Type Assertion
var cid = 1;
// let customerId = <number> cid
var customerId = cid;
// Functions
function addNumb(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'Peter'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now register";
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordan');
console.log(brad.register(), mike);
//Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp1 = new Employee(5, 'Peter', 'Software Engineer');
console.log(emp1.position);
//Generics
function getArray(items) {
    return new Array().concat(items);
}
var numbArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'john', 'Jill']);
numbArray.push(2);
