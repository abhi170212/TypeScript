// GETTERS
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
var user = /** @class */ (function () {
    function user(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    Object.defineProperty(user.prototype, "fullName", {
        get: function () {
            return this.fName + " " + this.lName;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var newUser = new user("Abhishek", "Singh");
console.log("getters ka example se >>>>>>>  " + newUser.fullName);
// do not execute the fullname() , t is already decided to use only fullName;
// SETTERS & STATIC
var NewUserClass = /** @class */ (function () {
    function NewUserClass() {
        this._firstName = '';
        this._lastName = '';
        // u do not need an instace of the class to call them or run them.
    }
    Object.defineProperty(NewUserClass.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === "")
                throw new Error("Inavlid name");
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewUserClass.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("Invalid name");
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewUserClass.prototype, "getFullName", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    NewUserClass.greet = function () {
        console.log("Hellow !");
    };
    NewUserClass.eid = "User";
    return NewUserClass;
}());
NewUserClass.greet();
console.log(NewUserClass.eid);
var newUserLoggedIn = new NewUserClass();
newUserLoggedIn.firstName = "Abhishek";
newUserLoggedIn.lastName = "Singh";
console.log(newUserLoggedIn.getFullName);
// Inheritance 
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(jobTitle, fname, lname) {
        var _this = _super.call(this, fname, lname) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(user));
var emp = new Employee("Software Developer", "Abhishek", "Singh");
console.log(emp.fullName);
