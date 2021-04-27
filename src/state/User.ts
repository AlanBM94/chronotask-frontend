export interface UserResponse {
    status: string;
    token: string;
    data: {
        user: {
            photo: string;
            _id: string;
            name: string;
            email: string;
        };
    };
}
