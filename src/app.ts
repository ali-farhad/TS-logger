import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payments.js'
import { HasFormatter } from './interfaces/interface.js'
import { listTemplate } from './classes/listTemplate.js'

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;


//get list

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === "invoice") {
      doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
    list.render(doc, type.value, 'start');
});