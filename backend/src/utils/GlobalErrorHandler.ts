import { Request, Response, NextFunction } from 'express';
import AppError from './AppError';

// Global error-handling middleware
function globalErrorHandler(
    err: any, 
    req: Request, 
    res: Response, 
    next: NextFunction
): any {
    // Default values
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let errorCode: string = err.errorCode || 'UNKNOWN_ERROR';
    let errorDetails: string = err.details || err.message;

    // Handle specific Mongoose CastError
    if (err.name === 'CastError') {
        errorCode = 'CAST_ERROR';
        errorDetails = `Invalid value for ObjectId: ${err.value}. Expected a 24-character hexadecimal string.`;
        err.statusCode = 400; // Bad Request
        err.status = 'fail';
    }

    // If it's an instance of AppError, handle it
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            statusCode: err.statusCode,
            errorMessage: errorDetails,
            errorCode: err.errorCode,
            details: err.details,
            timestamp: new Date().toISOString(),
        });
    }

    // For any other errors, return a generic 500 error
    return res.status(err.statusCode).json({
        status: err.status,
        errors: errorDetails,
        errorCode: errorCode,
        details: err.details || null,
        timestamp: new Date().toISOString(),
    });
}

export default globalErrorHandler;
