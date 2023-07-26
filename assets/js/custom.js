// const menus = document.querySelectorAll('.topbar-menu .topbar-menu-link')
// const menuGroup = document.querySelectorAll('.header-menu .nav-menu')

// const menus2 = document.querySelectorAll('.canvas-action .action')
// const menuGroup2 = document.querySelectorAll('.canvas-menu .nav-menu')

// const filterMenu = (menus, menuGroup) => {
//   menus.forEach(menu => {
//     menu.addEventListener('click', e => {
//       e.preventDefault()
//       const dataType = e.target.dataset.type

//       menus.forEach(m => {
//         m.classList.remove('active')
//       })
//       e.target.classList.add('active')

//       menuGroup.forEach(product => {
//         product.classList.contains(dataType) ? product.classList.remove('d-none') : product.classList.add('d-none')
//       })
//     })
//   })
// }

// filterMenu(menus, menuGroup)
// filterMenu(menus2, menuGroup2)

const headerSubMenu = document.querySelectorAll('.header-menu .sub-menu li.menu-item-has-children a:has(+ .sub-sub-menu)')

headerSubMenu.forEach(menu => {
  menu.addEventListener('click', e => {
    e.preventDefault()
    e.target.classList.toggle('active')
  })
})