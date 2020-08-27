import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payments.js';
import { listTemplate } from './classes/listTemplate.js';
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//get list
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
