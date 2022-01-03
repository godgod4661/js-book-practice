let status = false;
const input = document.querySelector('input');
input.addEventListener('change', (e) => {
  status = e.currentTarget.checked
  console.log(status)
})
const link = document.querySelector('a');
link.addEventListener('click',(e) => {
  if(!status){
    e.preventDefault();
  }
})