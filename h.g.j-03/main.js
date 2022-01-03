const select = document.querySelector('select');
const p = document.querySelector('p')

select.addEventListener('change',(e) => {
  const options = e.currentTarget.options
  const index = options.selectedIndex
  p.textContent = `선택: ${options[index].textContent}`
})