const buttonOpen = document.getElementById('clickBom');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', clickBom);
function clickBom() {
  modal.style.display = 'block';
  document.getElementById('btn_audio').play(); 
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function displayEff() {
  document.getElementById('display').style.display = 'none';
  console.log('ok')
}
displayEff()