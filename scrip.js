function buscarReceta() {
  const antojo = document.getElementById("antojo").value;
  const resultado = document.getElementById("resultado");

  const recetas = {
    dulce: [
      "Smoothie de banano con avena y miel 🍌🥛",
      "Yogurt con frutas y granola 🍓🥭",
      "Brownie saludable de avena y cacao 🍫🌾"
    ],
    crocante: [
      "Chips de garbanzo al horno 🌱",
      "Tostadas integrales con aguacate 🥑",
      "Palitos de zanahoria con hummus 🥕"
    ],
    caliente: [
      "Sopa de verduras casera 🥕🥦",
      "Avena caliente con canela y manzana 🍏",
      "Infusión de jengibre con miel y limón 🍋"
    ],
    frio: [
      "Ensalada fresca con aguacate y mango 🥑🥭",
      "Gazpacho andaluz (sopa fría de tomate) 🍅",
      "Helado de yogurt natural con frutos rojos 🍧"
    ]
  };

  if (recetas[antojo]) {
    const opciones = recetas[antojo];
    const aleatoria = opciones[Math.floor(Math.random() * opciones.length)];
    resultado.style.display = "block";
    resultado.innerHTML = `<b>✨ Snack recomendado:</b><br>${aleatoria}`;
  } else {
    resultado.style.display = "block";
    resultado.innerHTML = "❌ Selecciona un tipo de snack";
  }
}
