// Stack (Primitive), Heap(Non Primitive)


let myYoutubename = "Shrutimohanty"

let anothername = myYoutubename
anothername = "GoodGirl"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "Shruti@google.com"

console.log(userOne.email)
console.log(userTwo.email)