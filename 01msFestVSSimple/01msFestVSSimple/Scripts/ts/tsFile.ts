module tsFile {
    export function fn1(): void {
        console.log("fn1");
    }

    export function fn2(): boolean {
        let res: boolean = true;

        console.log(res);

        return res;
    }

    function fn3(): string {
        return "hi from function 3";
    }

    export function fn4(id: string): void {
        if (id && (id !== "")) {
            $(`#${id}`).text("TS rockzzz!");
        } else {
            console.log("error - no ID specified");
        }
    }

    export function fn5(inputString: string): string {
        return inputString.substr(3);
    }
}
