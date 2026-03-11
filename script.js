async function getReceita(params) {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
  );
  let data = await response.json();
  console.log(data);
  let receita = data.meals[0];
  console.log("Dados Brutos");
  console.log(data);
  console.log("Dados Receita");
  console.log(receita);

  document.getElementById("receita").innerHTML = `
    <h3>${receita.strMeal}</h3>
    <img src="${receita.strMealThumb}" alt="${receita.strMeal}" width="300">
    <p><strong>Categoria:</strong> ${receita.strCategory}</p>
    <p><strong>Área:</strong> ${receita.strArea}</p>
    <p><strong>Instruções:</strong> ${receita.strInstructions}</p>
    `;
}

