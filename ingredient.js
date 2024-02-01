'use strict';


export default class Ingredient {
    constructor(amount, unit, ingredient, description = '') {
        this.amount = amount;
        this.unit = unit;
        this.ingredient = ingredient;
        this.description = description;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    getUnit() {
        return this.unit;
    }

    setUnit(unit) {
        this.unit = unit;
    }

    getIngredient() {
        return this.ingredient;
    }

    setIngredient(ingredient) {
        this.ingredient = ingredient;
    }

    getDescription() {
        return this.description;
    }
}