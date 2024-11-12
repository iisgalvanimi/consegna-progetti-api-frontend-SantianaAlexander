import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-component',
  templateUrl: './fruit-component.component.html',
  styleUrls: ['./fruit-component.component.css']
})
export class FruitComponentComponent {
  fruits = [
    { name: 'mango', emoji: '🥭' },
    { name: 'banana', emoji: '🍌' },
    { name: 'apple', emoji: '🍎' },
    { name: 'cherry', emoji: '🍒' },
    { name: 'grapes', emoji: '🍇' },
    { name: 'watermelon', emoji: '🍉' },
    { name: 'pineapple', emoji: '🍍' },
    { name: 'orange', emoji: '🍊' },
    { name: 'pear', emoji: '🍐' },
    { name: 'strawberry', emoji: '🍓' },
    { name: 'lemon', emoji: '🍋' },
    { name: 'peach', emoji: '🍑' },
    { name: 'plum', emoji: '🍑' },
    { name: 'apricot', emoji: '🍑' },
    { name: 'blueberry', emoji: '🫐' },
    { name: 'kiwi', emoji: '🥝' },
    { name: 'melon', emoji: '🍈' },
    { name: 'coconut', emoji: '🥥' },
    { name: 'papaya', emoji: '🍍' },
    { name: 'pomegranate', emoji: '🍎' },
    { name: 'fig', emoji: '🍏' },
    { name: 'avocado', emoji: '🥑' },
    { name: 'clementine', emoji: '🍊' },
    { name: 'pear', emoji: '🍐' },
    { name: 'date', emoji: '🌴' },
    { name: 'blackberry', emoji: '🍇' },
    { name: 'raspberry', emoji: '🍇' },
    { name: 'persimmon', emoji: '🍑' },
    { name: 'tangerine', emoji: '🍊' },
    { name: 'dragon fruit', emoji: '🍍' },
    { name: 'apples', emoji: '🍏' },
    { name: 'lychee', emoji: '🍍' },
    { name: 'pear', emoji: '🍐' },
    { name: 'grapefruit', emoji: '🍊' }
  ];
}
