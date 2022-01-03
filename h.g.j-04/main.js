const input = document.querySelector('input');
const h1 = document.querySelector('h1');
let [timer,timerId] = [0,0]

input.addEventListener('change', (e) => {
  if(e.currentTarget.checked){
    timerId = setInterval(() => {
      timer++
      h1.textContent = `${timer}초`
    },1000)
  } else {
    clearInterval(timerId)
  }
})

