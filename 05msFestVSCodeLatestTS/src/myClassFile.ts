import * as is from "is_js";

export class myClass {
    public someString: string = "abcd";
    
    public getSomeString(): string {
        return this.someString;
    }
    
    static testIsString(param: any): boolean {
        if ((param) && (is.string(param)) && (param !== "")) {
            return true;
        } else {
            return false;
        }
    }
}