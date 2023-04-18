import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';

@Pipe({
  name: 'filterByName',
})
export class FilterByName implements PipeTransform {
  transform(cards: Card[], cardName: any) {
    cardName = cardName.trim().toLocaleLowerCase();

    if (cardName) {
      return cards.filter((card) =>
        card.name.toLocaleLowerCase().includes(cardName)
      );
    }

    return cards;
  }
}
