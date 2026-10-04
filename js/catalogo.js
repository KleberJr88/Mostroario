// ============================================================
// RENDERIZA OS CARDS DA HOME
// ============================================================
const catalogo = document.getElementById('catalogo')

function criarEstrelas(avaliacao) {
  let html = ''
  for (let i = 1; i <= 5; i++) {
    html += `<span class="estrela">${i <= avaliacao ? '★' : '☆'}</span>`
  }
  return html
}

todosOsProdutos.forEach(produto => {
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
