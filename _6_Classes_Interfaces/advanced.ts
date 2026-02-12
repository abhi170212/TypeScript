class userinfo {
  protected _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("inavlid name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("inavlid name");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static greet() {
    console.log("hello user");
  }
}
// console.log(userinfo.greet()); // aisa karne se aap hello user aur undefined dono hi paoge
userinfo.greet();

const Elon = new userinfo();
Elon.firstName = "Elon";
Elon.lastName = "Musk";
console.log(Elon.fullName);

console.log("----------------------INHERITANCE-----------------------");
class Employee extends userinfo {
  constructor(public jobTitle: string) {
    super();
    super.firstName = "Endrew";
    // supar se parent class ka constructor call ho jata hai
    // uske baad aap super. se koi sa bhi properties ko acess kr sakte hai
    // remember,agar super wale me kuch aur parameters hote to wo bhi pass karna padta.
  }

  work() {
    // some work
    // agar isme -firstname ko acess karna hai to protected ka use krna padega
    console.log(this._firstName);
  }
}

console.log("------------------------ABSTRACT CLASS-------------------------");

abstract class uiElements {
  constructor(public identifier: string) {}
  clone(targetLocation: string) {}
}

class sideBar extends uiElements{
  constructor(public identifier:string,public position:'left' | 'right'){
    super(identifier);
  }
}
