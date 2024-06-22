import { fireEvent } from '@testing-library/angular';

export class UserEvent {
  static typeNumber(
    element: Element | Node | Document | Window,
    number: number
  ) {
    if (number.toString().length > 1) {
      const numbers = number.toString().split('');
      numbers.forEach((number) => this.keyPress(element, number));
      return;
    }

    this.keyPress(element, number.toString());
  }

  private static keyPress(
    element: Element | Node | Document | Window,
    number: string
  ) {
    fireEvent.keyPress(element, {
      code: `Digit${number}`,
      key: number,
      keyCode: number.codePointAt(0),
    });
  }
}
