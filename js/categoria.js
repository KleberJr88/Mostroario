// ============================================================
// PEGA O SLUG DA URL
// ============================================================
const params = new URLSearchParams(window.location.search)
const slug = params.get('slug')

const categoria = categorias[slug]
const catalogo = document.getElementById('catalogo')
const titulo = document.getElementById('titulo-categoria')

// ============================================================
// TÍTULO
// ============================================================
if (categoria) {
  titulo.textContent = categoria.titulo
  document.title = `${categoria.titulo} - Mostruário de Perfumes`
} else {
  titulo.textContent = 'Categoria não encontrada'
}

// ============================================================
// ESTRELAS
// ============================================================
function criarEstrelas(avaliacao) {
  let html = ''
  for (let i = 1; i <= 5; i++) {
    html += `<span class="estrela">${i <= avaliacao ? '★' : '☆'}</span>`
  }
  return html
}

// ============================================================
// RENDERIZA OS CARDS
// ============================================================
if (categoria) {
  categoria.produtos.forEach(produto => {
    const card = document.createElement('a')
    card.href = `produto.html?id=${produto.id}`
    card.className = 'card'
    card.innerHTML = `
      <div class="imagem-container">
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>
      <div class="informacoes">
        <h2>${produto.nome}</h2>
        <div class="avaliacao">${criarEstrelas(produto.avaliacao)}</div>
        <p class="preco">${produto.preco}</p>
      </div>
    `
    catalogo.appendChild(card)
  })
} else {
  catalogo.innerHTML = `
    <div class="nao-encontrado" style="grid-column: 1 / -1;">
      <h1>Categoria não encontrada 😢</h1>
      <a href="index.html" class="voltar">Voltar para a Home</a>
    </div>
  `
}
