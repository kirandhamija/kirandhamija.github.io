console.log("running")

function createUser(name, id, phone) {
    return {
        name: name,
        id: id,
        phone: phone
    }
}

let user = {
    name: "Kiran",
    address: {
        street: " 15 cross road"
    }
}
user.hobbies = ["dance"];


function updatehobbies() {
    user.hobbies.push("Music");
}
updatehobbies("Music");
console.log(user);

function changevalue(key, nestedkey, value) {
    user[key][nestedkey] = value;

}

changevalue("address", "lane", "Sector - 34");
console.log(user);


