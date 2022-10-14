// const refs = {
//     sliderControl: document.querySelector('#font-size-control'),
//     changingText: document.querySelector('#text'),
//   };
  
//   refs.sliderControl.value = refs.sliderControl.min;
  
//   refs.sliderControl.addEventListener('change', event => {
//     refs.changingText.style.fontSize = refs.sliderControl.value + 'px';
//     console.log(refs.sliderControl.value);
//   });
  


  const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const textCont = textEl.textContent;
textEl.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener('input', onInputChange);
function onInputChange() {
    const fontSizeRange = Number(inputEl.value);
    textEl.style.fontSize = `${fontSizeRange}px`;
}