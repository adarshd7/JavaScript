let draggables = document.querySelectorAll('.fooditems');
let enterIntoTables = document.querySelectorAll('.tables');
// console.log(enterIntoTables);

for (let drag of draggables) {
    drag.addEventListener('dragstart', (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
        drag.classList.add('dragging');
    })
    drag.addEventListener('dragend', () => {
        drag.classList.remove('dragging');
    })
}
function countQuantity(table){
    // console.log(table);
    let total=0;
     const iterator=table.orders.values();
     let next=iterator.next().value;
     while(next){
         total+=next;
         next=iterator.next().value;
     }
     return total;

}
enterIntoTables.forEach(table => {
    table.addEventListener('drop', (e) => {
        let itemId=e.dataTransfer.getData("text");
        let itemElement=document.getElementById(itemId);
        let itemName=itemElement.children[0].textContent;
        let itemPrice=itemElement.children[1].textContent;
        let id=Number(table.getAttribute('id'))-1;
        let cost=table.children[1].children[0];
        let noOfItems=table.children[1].children[1];
        tables[id].totalCost+=Number(itemPrice.slice(1,));
        cost.textContent=`Rs ${tables[id].totalCost}`;
        let orderlist=tables[id].orders;
        if(orderlist.get(itemName)==null){
            orderlist.set(itemName,1);
        }
        else{
            orderlist.set(itemName,orderlist.get(itemName)+1);
        }
        noOfItems.textContent=`Total Items:${countQuantity(tables[id])}`;
        console.log(tables);
    })
})
//https://github.com/ganeshdende/JavaScript/tree/newassignment/Restuarant