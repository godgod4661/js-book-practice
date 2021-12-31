const input = document.querySelector('input');
const p = document.querySelector('p');
const isEmail = (value) => value.indexOf('@')>1 && value.split('@')[1].indexOf('.')>1;

input.addEventListener('keyup',(e) => {
  const value = input.value
  if(isEmail(value)){
    p.style.color = 'green'
    p.textContent = `이메일 형식입니다: ${value}`
  } else {
    p.style.color = 'red'
    p.textContent = `이메일 형식이 아닙니다: ${value}`
  }
})