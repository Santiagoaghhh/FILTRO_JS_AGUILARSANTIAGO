async function getData() {
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

getData()

async function ponloinner(){
    const agarrador = document.querySelector('.prueba');
    agarrador.innerHTML = `<div class="prueba">
    <img src="https://www.themealdb.com/images/media/meals/1548772327.jpg" alt="">
    <div class="info">
        <p>Baked salmon with fennel & tomatoes</p>
    </div>`
}

ponloinner()