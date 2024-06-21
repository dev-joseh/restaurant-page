import pepperoniImage from "./pepperoni.jpg";
import fourCheeseImage from "./fourCheese.jpg";
import margheritaImage from "./margherita.jpg";
import puglieseImage from "./pugliese.jpg";
import marinaraImage from "./marinara.jpg";

class Item {
    constructor(title, description, price, image_path) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image_path = image_path;
    }

    makeElement() {
        const root = document.createElement('div');

        const h1 = document.createElement("h1");
        h1.textContent = this.title;
        root.appendChild(h1);

        const image = new Image();
        image.src = this.image_path;
        image.style.width = "100%";
        root.appendChild(image);

        const description = document.createElement("p");
        description.textContent = this.description;
        root.appendChild(description);

        const price = document.createElement("p");
        price.textContent = this.price;
        price.style.marginTop = "10px";
        root.appendChild(price);

        return root;
    }
}

const menu = function() {
    const root = document.createElement('div');
    const pepperoni = new Item("Pepperoni", "Classic pizza topped with zesty pepperoni slices and gooey mozzarella cheese on a rich tomato sauce base.","$ 10", pepperoniImage);
    const fourCheese = new Item("Four Cheese", "A delectable blend of mozzarella, gorgonzola, parmesan, and fontina cheeses, creating a creamy and savory delight.","$ 11", fourCheeseImage);
    const pugliese = new Item("Pugliese", "A rustic favorite featuring sweet red onions, tangy tomatoes, and mozzarella, finished with a drizzle of olive oil.","$ 11", puglieseImage);
    const margherita = new Item("Margherita", "Traditional Italian pizza with fresh mozzarella, vine-ripened tomatoes, and aromatic basil on a light tomato sauce.","$ 12", margheritaImage);
    const marinara = new Item("Marinara", "Simple yet flavorful, this pizza features a rich tomato sauce, fresh garlic, and a sprinkle of oregano, perfect for purists.","$ 10", marinaraImage);

    root.appendChild(pepperoni.makeElement());
    root.appendChild(fourCheese.makeElement());
    root.appendChild(pugliese.makeElement());
    root.appendChild(margherita.makeElement());
    root.appendChild(marinara.makeElement());

    return root;
}

export { menu };