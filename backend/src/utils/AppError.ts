class AppError extends Error{
    public statusCode:number;
    public status:string;
    public isOperational:boolean;
    public errorCode:string;
    public details:any;

    constructor(message: string, statusCode: number, errorCode: string = 'UNKNOWN_ERROR', details: any = null) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        this.errorCode = errorCode;
        this.details = details;

        // Capture the stack trace for debugging, excluding the constructor itself
        Error.captureStackTrace(this, this.constructor);
    }

}

export default AppError;