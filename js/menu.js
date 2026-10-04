// ============================================================
// MENU (usado em todas as páginas)
// ============================================================
const botaoMenu = document.getElementById('botao-menu')
const menu = document.getElementById('menu')

if (botaoMenu && menu) {
  botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('aberto')
  })

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !botaoMenu.contains(e.target)) {
      menu.classList.remove('aberto')
    }
  })
}
