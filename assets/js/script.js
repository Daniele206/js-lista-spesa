const shoppingList = [
  'pane',
  'pasta',
  'acqua',
  'formaggio',
  'biscotti',
  'cereali',
  'carne',
  'latte',
  'coca-cola',
]

const takenList = [];
let validItem = false;

const btn = document.querySelector('.btn');
const text = document.querySelector('.my_text');

btn.addEventListener('click', function(){
  let validItem = false;
  btn.innerHTML = 'Altro oggetto';

  while (!validItem){
    const randomNumber = Math.floor(Math.random() * shoppingList.length);

    const shoppingItem = shoppingList[randomNumber];

    validItem = !takenList.includes(shoppingItem);

    if(validItem){
      takenList.push(shoppingItem);
      text.innerHTML = shoppingItem;
    }

    if(takenList.length === shoppingList.length & !validItem){
      btn.innerHTML = 'Ricomincia lista';
      text.innerHTML = 'Lista finita';
      
      takenList.splice(0);
      validItem = true;
    }
  }
})