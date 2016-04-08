module demoModule {
    "use strict";

    /**
     * async version of confirm dialog in the browser
     */
    export function getConfirmAsync(message: string): Promise<boolean> {
        var promise = new Promise(function (resolve: (value: boolean) => void, reject: (reason: any) => void) {
            let res: boolean = confirm(message);

            resolve(res);
        });

        return promise;
    }

    /**
     * consume getConfirmAsync
     */
    export async function consumeGetConfirmAsync(): Promise<void> {
        let res = await getConfirmAsync("please pick yes/no");

        console.log(res);
    }
}