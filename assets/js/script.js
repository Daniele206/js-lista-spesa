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
];

const takenList = [];

const btn = document.querySelector('.btn');
const text = document.querySelector('.my_text');
let listNumber = 0;

btn.addEventListener('click', function(){
  let validItem = false;
  btn.innerHTML = 'Altro oggetto';

  while (!validItem){
    const shoppingItem = shoppingList[listNumber];

    validItem = !takenList.includes(shoppingItem);

    if(validItem){
      takenList.push(shoppingItem);
      text.innerHTML = shoppingItem;
      listNumber = listNumber + 1;
    };
    
    if(takenList.length - 1 === shoppingList.length){
      btn.innerHTML = 'Ricomincia lista';
      text.innerHTML = 'Lista finita';
      
      takenList.splice(0);
      listNumber = 0;
      validItem = true;
    };
  };
});