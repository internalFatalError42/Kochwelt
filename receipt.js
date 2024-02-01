'use strict';


export default class Receipt {
    constructor(
        name,
        image,
        duration,
        preparationTime,
        difficulty,
        created,
        ingredients,
        description,
        preparationDescription,
        author
    ) {
        this.name = name;
        this.image = image;
        this.duration = duration;
        this.preparationTime = preparationTime;
        this.difficulty = difficulty;
        this.created = created;
        this.ingredients = ingredients;
        this.description = description;
        this.preparationDescription = preparationDescription;
        this.author = author;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }

    getDuration() {
        return this.duration;
    }

    getPreparationTime() {
        return this.preparationTime;
    }

    getDifficulty() {
        return this.difficulty;
    }

    getCreated() {
        return this.created;
    }

    getIngredients() {
        return this.ingredients;
    }

    getDescription() {
        return this.description;
    }

    getPreparationDescription() {
        return this.preparationDescription;
    }

    getAuthor() {
        return this.author;
    }

    setName(name) {
        this.name = name;
    }

    setImage(image) {
        this.image = image;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    setPreparationTime(preparationTime) {
        this.preparationTime = preparationTime;
    }

    setDifficulty(difficulty) {
        this.difficulty = difficulty;
    }

    setCreated(created) {
        this.created = created;
    }

    setIngredients(ingredients) {
        this.ingredients.push(ingredients);
    }

    setDescription(description) {
        this.description = description;
    }

    setPreparationDescription(preparationDescription) {
        this.preparationDescription = preparationDescription;
    }

    setAuthor(author) {
        this.author = author;
    }

    removeIngredient(ingredient) {
        this.ingredients.pop(ingredient);
    }
}