function setColorScheme(scheme) {
    const body = document.querySelector('body');

    if (scheme === '1') {
      body.style.color = '#333';
      body.style.backgroundColor = '#2F4F4F';
    } else if (scheme === '2') {
      body.style.color = '#333';
      body.style.backgroundColor = '#000000';
    } else if(scheme==='3'){
      body.style.color = '#333';
      body.style.backgroundColor = '#483D8B';
    } else if(scheme==='4'){
      body.style.color = '#333';
      body.style.backgroundColor = '#DC143C';
    } else if(scheme==='5'){
      body.style.color = '#333';
      body.style.backgroundColor = '#FF00FF';
    } else if(scheme==='6'){
      body.style.color = '#333';
      body.style.backgroundColor = '#008000';
    }
    else if(scheme==='7'){
      body.style.color = '#fff';
      body.style.backgroundColor = '#800080';
    }
  }

  function increaseFontSize() {
    const currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    const newFontSize = currentFontSize + 1;
    document.body.style.fontSize = newFontSize + 'px';
  }

  function decreaseFontSize() {
    const currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    const newFontSize = currentFontSize - 1;
    document.body.style.fontSize = newFontSize + 'px';
  }
  document.querySelectorAll('.thumbnail img').forEach(Image=>{
    Image.onclick=()=>{
        document.querySelector('.popupimage').style.display='block'
        document.querySelector('.popupimage img').src=Image.getAttribute('src');
    }
});
document.querySelector('.popupimage span').onclick=()=>{
    document.querySelector('.popupimage').style.display='none';
}