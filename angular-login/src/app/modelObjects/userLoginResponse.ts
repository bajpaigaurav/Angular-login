export interface UserLoginResponse {
    response: {
        username: string,
        authToken: string
    };
    status: {
        success: boolean,
        error: boolean
    }
}