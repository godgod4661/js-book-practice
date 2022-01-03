const h1 = document.querySelector('h1');
const text = document.querySelector('textarea');
let timer

text.addEventListener('focus',(e) => {
  timer = setInterval(() => {
    const length = text.value.length
    h1.textContent = `글자 수: ${length}`
  }, 50);
})
text.addEventListener('blur',(e) => {
  clearInterval((timer) => { 
  })
})