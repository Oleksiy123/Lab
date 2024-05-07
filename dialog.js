function dialogWithUser() {

    var age = prompt("Скільки вам років?");

    if (age !== null && !isNaN(age)) {

        alert("Вам " + age + " років.");
    } else {

        alert("Будь ласка, введіть коректний вік.");
    }

    var cookingInterest = confirm("Чи цікавить вас готування?");

    if (cookingInterest) {
        alert("Чудово! Готування - це чудовий спосіб виразити креативність та насолодитися смачними стравами.");
    } else {
        alert("Шкода, що ви не зацікавлені у готуванні. Але ви завжди можете насолоджуватися стравами нашого сайту!");
    }

    var favoriteFood = prompt("Яка ваша улюблена страва?");
    
    if (favoriteFood !== null && favoriteFood !== "") {
        alert("Ваша улюблена страва - " + favoriteFood + ". Дякуємо за участь!");
    } else {
        alert("Ви не ввели жодної страви. Будь ласка, спробуйте знову.");
    }

}