export class NotImplementedError extends Error {
    private methodName: string

    constructor(message: string, methodName: string) {
        super(message)
        this.methodName = methodName
    }
}