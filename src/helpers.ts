export const setHeaders = (token: string) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return config;
};
