const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', () => {
  const inch = Number(input.value)
  if(isNaN(inch)){
    p.textContent = '숫자를 입력해주세요'
    return
  } 
  const cm = inch*2.54
  p.textContent = `${cm} cm`
})