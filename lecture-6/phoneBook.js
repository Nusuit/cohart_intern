const phoneBook = new Map();

const addPersonInfo = (username, phoneNum) => {
    if (!phoneBook.has(username)) {
        phoneBook.set(username, phoneNum);
    }
    else {
        console.log("Reject added!!!");
    }
}
// search
addPersonInfo('Kien', "0946350603");
console.log(phoneBook.get('Kien'));