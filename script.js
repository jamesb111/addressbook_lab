"use strict";

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}



class AddressBook {
    constructor() {
        this.contacts = [
            new Contact("Snoopy", "snoopy@cooldog.com", "111-111-1111", "a cool friend"),
            new Contact("Porkchop", "porkchop@cooldog.com", "111-123-1111", "a cool dog"),
        ];
    }
    add(event) {
        let inputEl = document.querySelectorAll("input");
        console.log(inputEl[0].value);
        console.log(inputEl[1].value);
        console.log(inputEl[2].value);
        console.log(inputEl[3].value);

        let div = document.createElement("div");
        div.innerHTML = `
        <p>Name: ${inputEl[0].value}</p>
        <p>Email: ${inputEl[1].value}</p>
        <p>Phone: ${inputEl[2].value}</p>
        <p>Relation: ${inputEl[3].value}</p>
        <img class="delete__contact" src="https://image.flaticon.com/icons/png/512/93/93480.png">
        `;
        document.querySelector(".contact__container").append(div);
        for (let input of inputEl) {
            input.value = "";
        }
    }
    deleteAt(event) {
        if (event.target.tagName === "IMG") {
            event.target.parentNode.remove();
        } //delete button not working
        
    };

}

const main = document.querySelector("main");

main.addEventListener("click", function(event) {
    event.target.classList.contains("delete__contact");{
        book.deleteAt(event.target.attributes[0].value);
        event.target.parentNode.remove();
    }
});

const book = new AddressBook();

document.querySelector(".add-btn").addEventListener("click", book.add);

document.querySelector(".contact__container").addEventListener("click", book.deleteAt);


// function display(contacts) {
//     const el = document.createElement("p");
//     el.innerHTML = `
//     <span>Name: ${contacts.name}</span>
//     <span>Email: ${contacts.email}</span>
//     <span>Phone: ${contacts.phone}</span>
//     <span>Relation: ${contacts.relation}</span>`;
//     document.querySelector("contact__container").append(el);
// }



