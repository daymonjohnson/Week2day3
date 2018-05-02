class Contact{
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook{
    constructor(){
        this.Contact =[];
        let jimmy = new Contact("jimmy","jimmy@email.com","555-5555", "Sketchy friend");
        this.Contact[0] = jimmy;
        let billy = new Contact("Billy","Billy@gmail.com","1-800-Billy","Childhood Friend");
        this.Contact[1] = billy;
    }
    Add(){
        let name = prompt("Please input your contact's name");
        let email = prompt("Please input your contact's email");
        let phone = prompt("Please input your contact's number")
        let relation = prompt("Not to get too personal, but what is your relationship with this contact?")

        let newFriend = new Contact(name,email,phone,relation);
        this.Contact.push(newFriend);
    }
    Delete(){
        let index= prompt("What nummber index do you want to remove?");
        this.Contact.splice(index,1);
    }
    Print(){
        console.log(this.Contact);
    }
}
let book = new AddressBook();

while(true){
    let input = prompt("Do you wish to (add),(delete),(print) or (quit)?");

    if(input === "add"){
        book.Add();
    }
    else if(input==="delete"){
        book.Delete();
    }
    else if(input==="print"){
        book.Print();
    }
    else if(input === "quit"){
        console.log("Goodbye!");
        break;
    }
    else{
        console.log("Sorry I didn't understand that");
        console.log("Let's try that again!");
    }
}