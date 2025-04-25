export const signup = async ({ email, password }) => {
    const response = await fetch("/api/auth/signup", {
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        method: "POST",
    });
    if (!response.ok) {
    }
    return await response.json();
};
export const login = async ({ email, password }) => {
    const response = await fetch("/api/auth/login", {
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        method: "POST",
    });
    if (!response.ok) {
    }
    return await response.json();
};
export const logout = async () => {
    const response = await fetch("/api/auth/logout", {
        headers: {
            "Content-type": "application/json",
        },
        method: "POST",
    });
    if (!response.ok) {
        const { err } = await response.json();
        console.log(err);
        throw new Error(err || "Logout failed");
    }
    return response;
}