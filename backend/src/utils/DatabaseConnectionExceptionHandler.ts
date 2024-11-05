class DatabaseConnectionExceptionHandler extends Error{

    public status: number;
    public statusCode:string;
    public errorDetails:any;

    constructor (message:string,status:number,statusCode:string,errorDetails:any = null){
        super(message)
        this.status = status;
        this.statusCode = statusCode;
        this.errorDetails = errorDetails;

        Error.captureStackTrace(this,this.errorDetails);
    }

}

export default DatabaseConnectionExceptionHandler;