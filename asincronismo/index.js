let contenedor = document.getElementById('container');

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    for(let i=0; i< data.results.length; i++){
      
      console.log("Nombre", data.results[i].name)
      const element = data.results[i];        
      let h2 = document.createElement('h2');
      h2.innerText = element.name;
      contenedor.appendChild(h2);
  }
  })
  .catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))
