import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
submitForm() {
throw new Error('Method not implemented.');
}

  addToCart() {
    // Effectuez des actions liées au panier ici (par exemple, ajoutez l'article au panier).
    console.log('Product ajouté au panier !');
  }

  onCardNumberInput(event: any) {
    const caretPosition = event.target.selectionStart;
    const sanitizedValue = event.target.value.replace(/[^0-9]/gi, '');
    const parts = [];

    for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
      parts.push(sanitizedValue.substring(i, i + 4));
    }

    this.updateFormattedInput(event, caretPosition, parts.join('-'));
  }

  // For Date formatted input
  onExpirationDateInput(event: any) {
    const caretPosition = event.target.selectionStart;
    const sanitizedValue = event.target.value.replace(/[^0-9]/gi, '');
    const parts = [];

    for (let i = 0, len = sanitizedValue.length; i < len; i += 2) {
      parts.push(sanitizedValue.substring(i, i + 2));
    }

    this.updateFormattedInput(event, caretPosition, parts.join('/'));
  }

  private updateFormattedInput(event: any, caretPosition: number, formattedValue: string) {
    event.target.value = formattedValue;
    event.target.setSelectionRange(caretPosition, caretPosition);
  }

  // Radio button
  onRadioButtonClick(event: any) {
    const radioGroup = event.target.closest('.radio-group');
    if (radioGroup) {
      const radios = radioGroup.querySelectorAll('.radio');
      radios.forEach((radio: { classList: { remove: (arg0: string) => any; }; }) => radio.classList.remove('selected'));
      event.target.classList.add('selected');
    }
  }

  @HostListener('document:DOMContentLoaded', ['$event'])
  onDocumentLoad() {
    // Code to run on document load
  }
}
