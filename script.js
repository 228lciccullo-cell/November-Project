const mainCourses = [
    "Roasted Turkey",
    "Honey Glazed Ham",
    "Roasted Chicken",
    "Beef Roast"
];

const sides = [
    "Mashed Potatoes",
    "Mac and Cheese",
    "Green Bean Casserole",
    "Stuffing",
    "Sweet Potatoes",
    "Corn on the Cob",
    "Cranberry Sauce"
];

const desserts = [
    "Pumpkin Pie",
    "Apple Pie",
    "Pecan Pie",
    "Cheesecake",
    "Chocolate Cake"
];

const drinks = [
    "Apple Cider",
    "Lemonade",
    "Sweet Tea",
    "Cranberry Juice"
];

    function randomItem(array) {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
}

function makeMeal() {

    let main = randomItem(mainCourses);

    let availableSides = [...sides];

    let side1 = randomItem(availableSides);
    availableSides.splice(availableSides.indexOf(side1), 1);

    let side2 = randomItem(availableSides);
    availableSides.splice(availableSides.indexOf(side2), 1);

    let side3 = randomItem(availableSides);

    let dessert = randomItem(desserts);
    let drink = randomItem(drinks);

    document.getElementById("main").textContent = main;
    document.getElementById("side1").textContent = side1;
    document.getElementById("side2").textContent = side2;
    document.getElementById("side3").textContent = side3;
    document.getElementById("dessert").textContent = dessert;
    document.getElementById("drink").textContent = drink;
}