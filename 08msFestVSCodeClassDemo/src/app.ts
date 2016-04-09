class SuperClass {
    public prop1: string;
    public prop2: boolean;
}

class SubClass extends SuperClass{
    public prop3: number;
}

let sc = new SubClass();
sc.prop1 = "aaa";


console.log(sc.prop1);