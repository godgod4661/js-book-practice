const output = document.querySelector('#output');
const radios = document.querySelectorAll('[name=pet]');

radios.forEach((radio)=> {
  radio.addEventListener('change', (e) => {
    if(e.currentTarget.checked){
      output.textContent = `좋아하는 애완동물은 ${e.currentTarget.value}군요!`
    }
  })
})