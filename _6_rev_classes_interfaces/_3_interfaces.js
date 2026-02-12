var userAuth;
userAuth = {
    email: "test@gmail.com",
    password: 'abc1',
    role: "Student",
    login: function (email) { },
    logout: function () { }
};
// classes from interfaces
var AuthClass = /** @class */ (function () {
    function AuthClass(email, password) {
        this.email = email;
        this.password = password;
        this.role = "Student";
    }
    AuthClass.prototype.login = function (email) {
    };
    AuthClass.prototype.logout = function () { };
    return AuthClass;
}());
