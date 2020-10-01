import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gasolina: any;
  alcool: any;

  title = 'atividade-previa-angular';

  calc() {
    if (!this.alcool || !this.gasolina) {
      alert('Digite um valor para calcular');
      return;
    }

    let division = this.alcool / this.gasolina;

    if (division < 0.7) {
      alert('Abasteça com Álcool!')
    } else {
      alert('Abasteça com gasolina!');
    }


  }
}
