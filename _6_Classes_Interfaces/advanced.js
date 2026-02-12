var userinfo = /** @class */ (function () {
    function userinfo() {
        this._firstName = "";
        this._lastName = "";
    }
    Object.defineProperty(userinfo.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("inavlid name");
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userinfo.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("inavlid name");
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(userinfo.prototype, "fullName", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    userinfo.greet = function () {
        console.log("hello user");
    };
    return userinfo;
}());
// console.log(userinfo.greet()); // aisa karne se aap hello user aur undefined dono hi paoge 
userinfo.greet();
var Elon = new userinfo();
Elon.firstName = 'Elon';
Elon.lastName = 'Musk';
console.log(Elon.fullName);
