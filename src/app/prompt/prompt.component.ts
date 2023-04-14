import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from './author.model';

@Component({
  selector: 'prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class PromptComponent {
  @Input() author: Author = { name: 'oliver sacks' };
}
