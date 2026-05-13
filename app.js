async function buscarPokemon() {
  const nombre = document.getElementById("pokemonInput").value.toLowerCase()
  obtenerDatos(nombre)
}

async function randomPokemon() {
  const id = Math.floor(Math.random() * 151) + 1
  obtenerDatos(id)
}

async function obtenerDatos(pokemon) {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  try {
    const res = await fetch(url)

    if (!res.ok) throw new Error("No encontrado")

    const data = await res.json()

    const card = document.getElementById("card")
    card.classList.remove("hidden")

    card.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.other["official-artwork"].front_default}">
      <p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
      <p>Altura: ${data.height / 10} m</p>
      <p>⚖ Peso: ${data.weight / 10} kg</p>
    `

  } catch (error) {
    document.getElementById("card").innerHTML = "No se encontró "
  }
}