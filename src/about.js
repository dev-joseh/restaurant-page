const about = function() {
    const root = document.createElement('div');
    const title = document.createElement('div');
    const contacts1 = document.createElement('div');
    const contacts2 = document.createElement('div');
    
    title.classList.add("title");
    const h1 = document.createElement('h1');
    h1.textContent = "About us";
    title.appendChild(h1);
    const welcome = document.createElement('p');
    welcome.textContent = "At Delicious Pizza!, we believe that pizza is more than just food. It's a celebration of life, love, and tradition. Founded in 2020 in the heart of California, our pizzeria is a family-owned establishment dedicated to bringing the authentic taste of Italy to our vibrant local community."
    title.appendChild(welcome);
    root.appendChild(title);

    return root;
}

export { about };