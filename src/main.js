
const main = function() {
    const root = document.createElement('div');
    const title = document.createElement('div');
    const schedule = document.createElement('div');
    const location = document.createElement('div');

    title.classList.add("title");
    const h1 = document.createElement('h1');
    h1.textContent = "Delicious Pizza!";
    title.appendChild(h1);
    const welcome = document.createElement('p');
    welcome.textContent = "Welcome to Delicious Pizza! Where you can find the most thin, crisp and flavorful pizzas on the city! Our specialty is the traditional selection of toppings, from Margherita to Four Cheese."
    title.appendChild(welcome);
    root.appendChild(title);

    const scheduleHeader =  document.createElement("h2");
    scheduleHeader.textContent = "Schedule";
    schedule.appendChild(scheduleHeader);
    const scheduleListElement = document.createElement("ul");
    const scheduleList = [ 
        "Monday - 8am to 18pm",
        "Thursday - 8am to 18pm", 
        "Wednesday - 8am to 18pm", 
        "Tuesday - 8am to 18pm", 
        "Friday - 10am to 21pm", 
        "Saturday - 10am to 21pm", 
        "Sunday - Closed", 
        "Holidays - 10am to 21pm"];
    for(let i=0;i<scheduleList.length;i++) {
        const li = document.createElement("li");
        li.textContent = scheduleList[i];
        scheduleListElement.appendChild(li);
    }
    schedule.appendChild(scheduleListElement);
    root.appendChild(schedule);

    const locationHeader =  document.createElement("h2");
    locationHeader.textContent = "Location";
    location.appendChild(locationHeader);
    const address =  document.createElement("p");
    address.textContent = "Address: 438 Delphine Ramp. California."
    location.appendChild(address);

    root.appendChild(location);
    return root;
}

export { main };