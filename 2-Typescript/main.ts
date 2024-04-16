@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: Function) {
    console.log(Object.seal(constructor.prototype));
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

const bugReport = new BugReport("Acho q e o bug");


