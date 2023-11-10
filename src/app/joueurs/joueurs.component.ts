import { Component } from '@angular/core';
import { Joueur } from '../interfaces/joueur';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent {
  joueurs: string[] = ['MACHOUCHE',
                        'Ben Mrad',
                        'Hamrouni'];
}
export class Users {
  users: string[] = ['walid','admin','root'];
}
