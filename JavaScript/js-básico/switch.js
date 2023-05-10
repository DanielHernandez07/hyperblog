var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno");
        break;
        
    case 10:
        console.log("Soy on 10");
        break;
    
    case 100:
        console.log("Si soy un 100");
        break;

    default:
        console.log("No soy nada");
}

export function solution(article) {
    if (article == 'computadora') {
      return 'Con mi computadora puedo programar usando JavaScript';
    } else if (article == 'celular') {
      return 'En mi celular puedo aprender usando la app de Platzi'
    } else if (article == 'cable') {
      return '¡Hay un cable en mi bota!'
    } else  {
      return 'Artículo no encontrado'
    }
  }
  