import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ZapatillaData implements InMemoryDbService {

  createDb() {
    let zapatillas = [
      {
        "id": 0,
        "title": "Air Jordan 4 Starfish",
        "price": 199.99,
        "description": "Con un diseño inspirado en las expediciones espaciales, este modelo llega con toda la fuerza y la belleza de los materiales técnicos que se usan en los trajes de astronauta.",
        "image": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/bbb86c37-c657-4367-a5d1-84e5b24e04d3/fecha-de-lanzamiento-de-las-air-jordan-4-starfish.jpg"
      },
      {
        "id": 1,
        "title": "Air Max 1 LV8 Dark Teal Green",
        "price": 149.99 ,
        "description": "Las Nike Air Max 1 LV8 rediseñan las legendarias originales que siguen en lo más alto de su reinado desde 1987.",
        "image": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/a238e26b-b109-4964-83f4-504063d5e9d3/fecha-de-lanzamiento-de-las-air-max-1-lv8-dark-teal-green.jpg"
      },
      {
        "id": 2,
        "title": "SB Dunk Low x Sean Cliver Holiday Special",
        "price": 99.99,
        "description": "Este regalo con temática de la temporada de Sean Cliver utiliza ante aterciopelado, piel premium y detalles de nieve metalizados para darle un toque invernal a un básico del skate.",
        "image": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c817dfd2-e826-4eff-b058-ff6972b2ea1d/fecha-de-lanzamiento-de-las-sb-dunk-low-x-sean-cliver-holiday-special.jpg"
      },
      {
        "id": 3,
        "title": "Air Max Tailwind 5 Iron Grey",
        "price": 179.99 ,
        "description": "Nacidas durante el cambio de milenio, las Tailwind 5 son tan actuales ahora como hace dos décadas.",
        "image": "https://c.static-nike.com/a/images/t_prod_ss/w_480,c_limit,q_auto,f_auto/4e308f23-0825-4056-a088-8084288cede9/fecha-de-lanzamiento-de-las-air-max-tailwind-5-iron-grey.jpg"
      },
      {
        "id": 4,
        "title": "Zoom 004 x MMW Stone",
        "price": 449.99,
        "description": "Mediante su trabajo en Givenchy y su propia marca, Alyx, el director creativo Matthew M. Williams se ha hecho famoso por llevar la moda a nuevos horizontes.",
        "image": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ba5ce688-bb51-4527-aa20-f54a3320e2ba/fecha-de-lanzamiento-de-las-zoom-004-x-mmw-stone.jpg"
      },
      {
        "id": 5,
        "title": "Air Jordan 1 J. Balvin",
        "price": 189.99 ,
        "description": "La primera vez que las vimos fue durante el descanso de un espectáculo en el mayor escenario del fútbol americano.",
        "image": "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/7f166335-08d6-467e-bb19-bb85d6a7b163/fecha-de-lanzamiento-de-las-air-jordan-1-jbalvin.jpg"
      }
    ];
    return { zapatillas: zapatillas };
  }
}
