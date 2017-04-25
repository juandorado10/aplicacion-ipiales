import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  sites = [
    {
      Card_title: 'PLAZA 20 DE JULIO',
      message: `Antiguamente era Plaza Mayor, es el primero de los parques de Ipiales
       (1910) en el centro de la ciudad, remodelado varias veces, la última en el 2007,
        con un estilo moderno que contrasta con las construcciones que la rodean. `,
      image: 'https://conoce-narino.wikispaces.com/file/view/20dejulio.jpg/264160065/596x587/20dejulio.jpg'
    },
    {
      Card_title: 'PARQUE SAN FELIPE',
      message: `LA IGLESIA SAN FELIPE NERI de cúpulas estilo bizantino,
       tiene un hermoso altar de madera tallada, obra maestra de la artesanía 
       nariñense y guarda valiosas reliquias pictóricas y escultóricas.`,
      image: 'https://c1.staticflickr.com/8/7060/13921812831_9d8eac85d6_z.jpg'
    },
    {
      Card_title: 'PARQUE SANTANDER',
      message: `Se encuentra entre la calle 18 y 19 y entre las carreras 5a y 6a.
       Tiene como anécdota fundamental que la ciudad compró el lote en $1.000,00 para
        colocar un monumento que rindiera homenaje al libertador SIMON BOLIVAR, pero
         que por cuestiones del destino o por equivocación del escultor se realizó el
          monumento en bronce fundido a el General FRANCISCO DE PAULA SANTANDER, 
          de donde deriva su actual nombre.`,
      image: 'http://static.panoramio.com/photos/large/29551363.jpg'
    },
    {
      Card_title: 'CENTRO COMERCIAL GRAN PLAZA',
      message: ` Gran Plaza llega a Nariño con el objetivo de construir un punto 
      de encuentro en donde los Ipialeños y sus visitantes puedan vivir experiencias inolvidables. `,
      image: 'http://lh3.googleusercontent.com/MzrkI_2Plz1HKyXOwSvD5C67KNnpxeAH8UmNzs38hRuz_RarsQ7pAGBjT05AmhO4VlOmT581FpvX9TXWK7JabSIEvFE=s0'
    }
  ];

}
