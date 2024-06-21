
const footer = function() {
    const root = document.createElement("footer");
    const link = document.createElement("a");
    const text = document.createElement("p");

    root.style.paddingBottom = "10px";

    text.textContent = "Copyright © 2024 dev-joseh";
    link.appendChild(text);

    link.href = "https://github.com/dev-joseh";
    link.target = "_blank";
    link.rel = "norefferer noopener";
    link.style.textDecoration = "none";
    link.style.textAlign = "center";
    link.style.color = "white";
    root.appendChild(link);

    return root;
}

export { footer };