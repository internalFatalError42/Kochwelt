'use strict';
import Receipt from './receipt.js';
import Ingredient from './ingredient.js';
import { loadImpressum, loadDataProtection } from './pagecontent.js';


const spaghetti = new Ingredient(100, 'g', 'Spaghetti oder Tortellini'),
      ham = new Ingredient(50, 'g', 'Schinken'),
      eggyellow = new Ingredient(1, '', 'Eigelb'),
      muskato = new Ingredient(0.25, 'Prise', 'Muskat'),
      parmesan = new Ingredient( 0,'n.B', 'Parmesan'),
      buttercarbonara = new Ingredient(12, 'g', 'Butter'),
      pepper = new Ingredient(2, '', 'Paprikaschote (n)', 'rot und grün'),
      tomato = new Ingredient(500, 'g', 'Tomate (n)'),
      saltPepper = new Ingredient('', '', 'Salz und Pfeffer'),
      olivoil = new Ingredient(125, 'ml', 'Olivenöl'),
      pasta = new Ingredient(500, 'g', 'Nudeln'),
      basil = new Ingredient(50, 'g', 'Basilikum'),
      mozarrella = new Ingredient(150, 'g', 'Mozzarella'),
      flour = new Ingredient(20, 'g', 'Weizenmehl'),
      sugar = new Ingredient(0, 'n.B eine Prise', 'Zucker'),
      salt = new Ingredient(0, 'n.B eine Prise', 'Salz'),
      egg = new Ingredient(1, '', 'Eier'),
      milk = new Ingredient(40, 'ml', 'Milch'),
      butter = new Ingredient(4, 'g', 'Butter');

const spaghettiCarbonara = new Receipt(
    'Spaghetti Carbonara',
    'img/carbonnara.jpg',
    15,
    15,
    'simple',
    '29.01.2024',
    [
        spaghetti,
        ham,
        eggyellow,
        buttercarbonara,
        saltPepper,
        muskato,
        parmesan
    ],
    'EIn leckeres Nudelgericht, das schnell zubereitet ist.',
    'Spaghetti nach Packungsanweisung kochen. Schinken würfeln. Eigelb mit Butter und Muskat verrühren. Spaghetti abgießen und mit dem Schinken vermischen. Eigelbmasse unterrühren. Mit Salz und Pfeffer abschmecken. Mit Parmesan bestreut servieren.',
    'Pascal'
);

const pastaSalad = new Receipt(
    'Nudelsalat',
    'img/nudelsalat.jpg',
    30,
    30,
    'simple',
    '17.04.2023',
    [
        pasta,
        tomato,
        pepper,
        saltPepper,
        olivoil,
        basil,
        mozarrella
    ],
    'Ein leckerer Salat, der sich gut als Beilage zu Gegrilltem eignet.',
    'Nudeln nach Packungsanweisung kochen. Tomaten waschen und würfeln. Paprika waschen, entkernen und würfeln. Mozzarella würfeln. Basilikum waschen und klein schneiden. Alles in eine Schüssel geben und mit Salz, Pfeffer und Olivenöl würzen. Den Salat mindestens 30 Minuten ziehen lassen.',
    'Marco'
);

const crepes = new Receipt(
    'Crepes',
    'img/crepes.jpg',
    15,
    15,
    'simple',
    '29.01.2024',
    [
        flour,
        sugar,
        salt,
        egg,
        milk,
        butter

    ],

    'Ein leckerer Salat, der sich gut als Beilage zu Gegrilltem eignet.',
    'Für den Teig Mehl mit Zucker und Salz vermischen. Eier und Milch hinzufügen und mit einem Schneebesen oder dem Handrührgerät zu einem glatten Teig verrühren. Der Teig ist relativ dünnflüssig, damit er auf dem Crêpes-Maker möglichst dünn verstrichen werden kann.Crêpes-Maker auf mittlerer bis hoher Stufe erhitzen und mit etwas Butter oder Fett bestreichen. Wenn deine Crêpes-Platte antihaft-beschichtet ist, musst du dies nur einmal zu Beginn machen.Falls du keinen Crêpes-Maker hast, kannst du die Crêpes auch in einer Pfanne ausbacken. Am besten hat die Pfanne einen möglichst niedrigen Rand.',
    'Ertan'
);

const receiptList = [
    pastaSalad,
    spaghettiCarbonara,
    crepes
];

// creates the receipt
const loadReceipt = function (amount = 1, receiptNumber = localStorage.getItem('receipt')) {
    const receipt = receiptList[receiptNumber];
    document.getElementById('receipt-name').innerHTML = receipt.getName();
    document.getElementById('receipt-image').src = receipt.getImage();
    document.getElementById('receiptId').value = receiptNumber;
    document.getElementById('duration').innerHTML = receipt.getDuration() + ' Min';
    document.getElementById('difficulty').innerHTML = receipt.getDifficulty();
    document.getElementById('created').innerHTML = receipt.getCreated();

    const ingredients = receipt.getIngredients();
    let ingredient = ``;

    ingredients.forEach(element => {
        ingredient += `<tr><td>${element.getAmount() > 0 ? element.getAmount() * amount : ''} ${element.getUnit()} ${element.getIngredient()} ${element.getDescription()}</td></tr>`;
    });
    document.getElementById('ingredients').innerHTML = ingredient;

    document.getElementById('preparation-text').innerHTML = `ca ${receipt.getPreparationTime()} Minuten`;
    document.getElementById('duration-text').innerHTML = `Gesamtzeit ca ${receipt.getDuration()} Minuten`;
    document.getElementById('preparation-description').innerHTML = receipt.getPreparationDescription();
    document.getElementById('creator-text').innerHTML = receipt.getAuthor();
}

const loadReceiptOfTheDay = function (amount = 1, receiptNumber = 1) {
    const receipt = receiptList[receiptNumber];
    document.getElementById('receipt-of-the-day-name').innerHTML = receipt.getName();
    document.getElementById('receipt-of-the-day-image').src = receipt.getImage();
    document.getElementById('receipt-of-the-day-Id').value = receiptNumber;
    document.getElementById('receipt-of-the-day-duration').innerHTML = receipt.getDuration() + ' Min';
    document.getElementById('receipt-of-the-day-difficulty').innerHTML = receipt.getDifficulty();
    document.getElementById('receipt-of-the-day-created').innerHTML = receipt.getCreated();

    const ingredients = receipt.getIngredients();
    let ingredient = ``;

    ingredients.forEach(element => {
        ingredient += `<tr><td>${element.getAmount() > 0 ? element.getAmount() * amount : ''} ${element.getUnit()} ${element.getIngredient()} ${element.getDescription()}</td></tr>`;
    });
    document.getElementById('receipt-of-the-day-ingredients').innerHTML = ingredient;

    document.getElementById('receipt-of-the-day-preparation-text').innerHTML = `ca ${receipt.getPreparationTime()} Minuten`;
    document.getElementById('receipt-of-the-day-duration-text').innerHTML = `Gesamtzeit ca ${receipt.getDuration()} Minuten`;
    document.getElementById('receipt-of-the-day-preparation-description').innerHTML = receipt.getPreparationDescription();
    document.getElementById('receipt-of-the-day-creator-text').innerHTML = receipt.getAuthor();
}

document.getElementById('calculate-amount').onclick = function () {
    let amount = document.getElementById('amount').value;
    let receiptNumber = document.getElementById('receiptId').value;

    if (amount > 0 && amount < 1000) {
        loadReceipt(amount, receiptNumber);
    } else {
        loadReceipt(1, receiptNumber);
        document.getElementById('amount').value = 1;
    }
};

document.getElementById('receipt-of-the-day-calculate-amount').onclick = function () {
    let amount = document.getElementById('receipt-of-the-day-amount').value;
    let receiptNumber = document.getElementById('receipt-of-the-day-Id').value;

    if (amount > 0 && amount < 1000) {
        loadReceiptOfTheDay(amount, receiptNumber);
    } else {
        loadReceiptOfTheDay(1, receiptNumber);
        document.getElementById('receipt-of-the-day-amount').value = 1;
    }
};

// sends the mail from the contact form
const sendMail = function (event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xqkraooq", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        document.getElementById("contact-box").innerHTML = "<h1>Kontaktanfrage</h1><br><p><b>Ihre Nachricht wurde gesendet</b></p>";
        
        setTimeout(function () {
            location.reload();
        }, 5_000);

    }).catch((error) => {
        console.log(error);
    });
};

document.getElementById('Datenschutz').onclick = function () {
    let sendButton = document.getElementById('send-button');
    let countdown = 5;

    if (document.getElementById('Datenschutz').checked) {
        setInterval(function () {
            countdown--;
            if (countdown >= 0) {
                sendButton.value = countdown;
            } else {
                sendButton.disabled = false;
                sendButton.value = 'Senden';
                clearInterval(this);
            }
        }, 1_000);
    }
};

document.getElementById('menu-logo').onclick = function () {
    document.getElementById('header-menu').classList.add('show-header-menu');
};

let closeButton = document.getElementById('close-button'),
    startLink = document.getElementById('start-link'),
    receiptOfTheDayLink = document.getElementById('receipt-of-the-day-link'),
    contactLink = document.getElementById('contact-link'),
    impressumLink = document.getElementById('impressum-link'),
    dataPrivacyFooterLink = document.getElementById('data-privacy-footer-link'),
    contactFooterLink = document.getElementById('contact-footer-link'),
    impressumFooterLink = document.getElementById('impressum-footer-link'),
    headerLogo = document.getElementById('header-logo'),
    mainTag = document.querySelector('main'),
    closeMenuElements = [
        closeButton,
        startLink,
        receiptOfTheDayLink,
        contactLink,
        impressumLink,
        dataPrivacyFooterLink,
        contactFooterLink,
        impressumFooterLink,
        headerLogo,
        mainTag
    ];

closeMenuElements.forEach(element => {
    element.onclick = function () {
        if (element === receiptOfTheDayLink) {
            loadReceiptOfTheDay(1, 1);
            document.getElementById('receipt-of-the-day-amount').value = 1;
        }

        document.getElementById('amount').value = 1;
        document.getElementById('header-menu').classList.remove('show-header-menu');
    };
});

let receipt0 = document.getElementById('receipt-01'),
    receipt1 = document.getElementById('receipt-0'),
    receipt2 = document.getElementById('receipt-1'),
    receipt3 = document.getElementById('receipt-2'),
    receipts = [receipt0, receipt1, receipt2, receipt3];

receipts.forEach(receipt => {
    receipt.onclick = function () {
        let receiptId = +receipt.dataset.receipt;
        loadReceipt(1, receiptId);
        localStorage.setItem('receipt', receiptId);
        document.getElementById('header-menu').classList.remove('show-header-menu');
    };
});

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        loadImpressum();
        loadDataProtection();
        loadReceiptOfTheDay();
        loadReceipt();
    });
})();

let url = document.URL,
    index = url.indexOf("#"),
    hash = index !== -1 ? url.substring(index + 1) : "";

if (hash === '') {
    location.hash = '#start-page';
}
