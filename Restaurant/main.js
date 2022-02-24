function displayTables(tables) {
    let tableElement = document.querySelector('.Table');
    for (let table of tables) {
        let tableCard = document.createElement('div');
        tableCard.setAttribute("id", table.id);
        tableCard.setAttribute("class", "tables");
        tableCard.setAttribute('ondragover', 'allowdrag(event)')
        let tableName = document.createElement('h3');
        tableName.textContent = "Table-"+table.id;
        let tableContent = document.createElement('div');
        tableContent.setAttribute('id', 'tableContent');
        tableContent.setAttribute("class", "tableContent");
        let tableTotal = document.createElement('p');
        let TotalItems = document.createElement('p');
        tableTotal.textContent = "Rs 0 ";
        TotalItems.textContent = "| Total Items: 0";
        tableCard.appendChild(tableName);
        tableContent.appendChild(tableTotal);
        tableContent.appendChild(TotalItems);
        tableCard.appendChild(tableContent);
        tableElement.appendChild(tableCard);
    }

}
displayTables(tables);





function displayMenu(menuItems) {
    menu = document.querySelector('.Menu');
    for (let item of menuItems) {
        let itemCard = document.createElement('div');
        itemCard.setAttribute("id", "item- " + item.id);
        itemCard.setAttribute("class", "fooditems");
        itemCard.setAttribute('draggable', true);
        let itemName = document.createElement('h3');
        let itemPrice = document.createElement('p');
        let category = document.createElement('p');
        category.textContent = item.category;
        category.style.display = 'none';
        itemName.textContent = item.name;
        itemPrice.textContent = "Rs" + item.price;
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(category);
        menu.appendChild(itemCard);
    }
}
displayMenu(menuItems);







let search = document.getElementById('searchItem');
let allItems = document.querySelectorAll('.fooditems')
search.addEventListener('keyup', () => {
    let target = search.value.toLowerCase();
    for (let item of allItems) {
        let name = item.children[0].innerHTML.toLowerCase();
        let category = item.children[2].innerHTML.toLowerCase();
        if (name.includes(target) || category.includes(target)) {
            item.style.display = '';
        }
        else {
            item.style.display = 'none';
        }
    }
})


const tableElements = document.querySelectorAll('.tables');
const searchTable = document.querySelector('.searchTable');
searchTable.addEventListener('keyup', () => {
    let targetTable = searchTable.value.toLowerCase();
    for (let table of tableElements) {
        let tableName = table.children[0].innerHTML.toLowerCase();
        if (tableName.includes(targetTable)) {
            table.style.display = '';
        }
        else {
            table.style.display = "none";
        }
    }
}
);
