const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizers) {
        this._course.appetizers = appetizers;
    },

    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._course.mains = mains;
    },

    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._course.desserts = desserts;
    },

    get courses() {
        return {
            appetizers: this.appertizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + mains.price + desserts.price;
        return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name} and totoal price is $${totalPrice}`;
    }
};

menu.addDishToCourse('appetizers', 'salan', 40);
menu.addDishToCourse('mains', 'steak', 160);
menu.addDishToCourse('desserts', 'ice - cream', 55);

menu.addDishToCourse('appetizers', 'salan2222', 50);
menu.addDishToCourse('mains', 'steak2222', 170);
menu.addDishToCourse('desserts', 'ice - cream2222', 65);

menu.addDishToCourse('appetizers', 'salan3333', 60);
menu.addDishToCourse('mains', 'steak3333', 180);
menu.addDishToCourse('desserts', 'ice - cream3333', 75);





const meal = menu.generateRandomMeal();
console.log(meal);


