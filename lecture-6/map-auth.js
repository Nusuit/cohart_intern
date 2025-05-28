const userAccounts = new Map();

userAccounts.set("user123", "123123");
userAccounts.set("admin", "admin_password");
userAccounts.set("john.doe", "mySecretPassword123");

function login(userId, password) {
    const storedPassword = userAccounts.get(userId);

    if (storedPassword === undefined) {
        console.log("Do not have this id")
        return false;
    }
    else if (storedPassword === password) {
        console.log("Successfully access");
        return true;
    }
    else {
        console.log("login failed");
        return false;
    } m
}
//test
login("user123", "123123"); // Successfully access
login("user", "user"); // Do no have this id
login("admin", "admin"); // login failed
console.log(userAccounts.size) // 3

// delete
userAccounts.delete("admin");
console.log(userAccounts.size); // 2
login("admin", "admin"); // Do not have this id

const MAX_ATTEMPTS = 3;
const attempt = new Map();

const CheckAccess = (userId) => {
    if (!userAccounts.has(userId)) {
        userAccounts.set(userId, MAX_ATTEMPTS);
    }

    let attemptLeft = userAccounts.get(userId);

    if (attemptLeft > 0) {
        attemptLeft--;
        userAccounts.set(userId, attemptLeft);
        console.log(`user ${userId} has only ${attemptLeft} attempts`)
        return true;
    }
    else {
        console.log(`user ${userId} has no attempt to login`);
        return false;
    }
}

// test
CheckAccess("guest"); //user guest has only 2 attempts
CheckAccess("guest"); //user guest has only 1 attempts
CheckAccess("guest"); //user guest has only 0 attempts
CheckAccess("guest"); //user guest has no attempt to login
CheckAccess("guest"); //user guest has no attempt to login
CheckAccess("guest"); //user guest has no attempt to login
