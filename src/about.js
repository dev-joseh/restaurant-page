const about = function() {
    const root = document.createElement('div');
    const title = document.createElement('div');
    const contacts = document.createElement('div');
    
    title.classList.add("title");
    const h1 = document.createElement('h1');
    h1.textContent = "About us";
    title.appendChild(h1);
    const welcome = document.createElement('p');
    welcome.textContent = "At Delicious Pizza!, we believe that pizza is more than just food. It's a celebration of life, love, and tradition. Founded in 2020 in the heart of California, our pizzeria is a family-owned establishment dedicated to bringing the authentic taste of Italy to our vibrant local community."
    title.appendChild(welcome);

    const h2 = document.createElement("h2");
    h2.textContent = "Contact";
    contacts.appendChild(h2);
    const contactsInfo1 = document.createElement("p");
    contactsInfo1.textContent = "(12) 345-678-910"
    contacts.appendChild(contactsInfo1);
    const contactsInfo2 = document.createElement("p");
    contactsInfo2.textContent = "dummy@email.com"
    contacts.appendChild(contactsInfo2);

    root.appendChild(title);
    root.appendChild(contacts);
    return root;
}

export { about };