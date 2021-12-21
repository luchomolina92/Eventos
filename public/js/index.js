let saludo = 'Hola'

console.log(saludo);

let main = document.querySelector('main')

let h2 = document.querySelector('h2')

let a = document.querySelector('a')

let p = document.querySelector('p')

window.onload = function() {
    let nombre = prompt('Ingrese su nombre')

    if (nombre) {
        h2.innerHTML += nombre
        }else{
        h2.innerText += ' Invitado'
        }
  };

  h2.style.textTransform='uppercase'

  a.style.color = "#E51B3E"


  let fondo= confirm('¿Deseas colocar un fondo de pantalla?')

  if(fondo){
    document.querySelector('body').classList.add('fondo')
  }else{
    document.querySelector('body').classList.add(null)
  }



  for (let i = 0; i < p.length; i++) {
    if (i % 2 == 0) {
      p[i].classList.add('destacadoPar');
    } else {
     
      p[i].classList.add('destacadoImpar');
    }
  }

