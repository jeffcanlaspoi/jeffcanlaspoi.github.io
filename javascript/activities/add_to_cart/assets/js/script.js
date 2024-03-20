let itemList = [];
let cartItemList = [];
let editFlag = false;
let existing = false;

document.getElementById('btn-add-item').addEventListener('click', function(){
    
    let skuNum = document.getElementById('input-sku-num').value;
    let itemName = document.getElementById('input-item-name').value;
    let itemPhoto = document.getElementById('input-item-photo').value;
    let itemPrice = document.getElementById('input-item-price').value;

    let itemListObj = {
        skuNum: skuNum,
        itemName: itemName,
        itemPhoto: itemPhoto,
        itemPrice: itemPrice,
        itemQty: 1,
        itemTotal: 0
    }

    if(!skuNum || !itemName || !itemPhoto || !itemPrice){
        alert('Please input data on the fields.');
        return;
    } 
    else {
        if(editFlag === true){
            for(let i = 0; i < itemList.length; i++){
                if(itemList[i].skuNum === skuNum){
                    itemList[i].itemName = itemName;
                    itemList[i].itemPhoto = itemPhoto;
                    itemList[i].itemPrice = itemPrice;
                }
            }
        } else {
            if(!itemList.length){
                itemList.push(itemListObj);
            } else {
                for(let i = 0; i < itemList.length; i++){
                    if(itemList[i].skuNum === skuNum){
                        existing = true;
                        alert('existing');
                    }
                }

                if(!existing){
                    itemList.push(itemListObj);
                }
            }
        }
        editFlag = false;
        existing = false;
    }
    
    DisplayItem();
    document.getElementById('input-sku-num').value = "";
    document.getElementById('input-item-name').value = "";
    document.getElementById('input-item-photo').value = "";
    document.getElementById('input-item-price').value = "";
    document.getElementById('btn-add-item').innerText = "Add Item";
});
 

function cart(index, skuNum){

    for(let i = 0; i < cartItemList.length; i++){
        if(cartItemList[i].skuNum == skuNum){
            cartItemList[i].itemQty += 1;
            cartItemList[index].itemTotal = cartItemList[index].itemPrice * cartItemList[index].itemQty;
            DisplayTable();
            return;
        }        
    }

    // Will refactor this part next time to add 1 on item qty on inital add cart.
    cartItemList.push(itemList[index]);
    DisplayTable();
}

function increaseQty(index){
    cartItemList[index].itemQty += 1;
    cartItemList[index].itemTotal = cartItemList[index].itemPrice * cartItemList[index].itemQty;
    DisplayTable();
}

function decreaseQty(index){
    cartItemList[index].itemQty -= 1;
    cartItemList[index].itemTotal = cartItemList[index].itemPrice * cartItemList[index].itemQty;

    if(cartItemList[index].itemQty <= 0){
        cartItemList.splice(index, 1);
    }

    DisplayTable();
}

function modify(index){
    editFlag = true;
    document.getElementById('input-sku-num').value = itemList[index].skuNum;
    document.getElementById('input-item-name').value = itemList[index].itemName;
    document.getElementById('input-item-photo').value = itemList[index].itemPhoto;
    document.getElementById('input-item-price').value = itemList[index].itemPrice;
    document.getElementById('btn-add-item').innerText = "Update Item";
}

function remove(index){
    itemList.splice(index, 1);
    DisplayItem();
}

function DisplayItem(){
    let itemCardHTML = "";

    for(let i = 0; i < itemList.length; i++){
        itemCardHTML += `
            <div class="col">
                <div class="card" style="width: 14rem;">
                    <img src="${itemList[i].itemPhoto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${itemList[i].itemName}</h5>
                        <p class="card-text">Amount: ${itemList[i].itemPrice}</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-success btn-sm" onclick="cart(${i}, ${itemList[i].skuNum})">Cart</button>
                            <button class="btn btn-warning btn-sm" onclick="modify(${i})">Modify</button>
                            <button class="btn btn-danger btn-sm" onclick="remove(${i})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('item-display').innerHTML = itemCardHTML;
}

function DisplayTable(){
    let tblDataHTML = "";
    let itemCount = 1;

    for(let rowCount = 0; rowCount < cartItemList.length; rowCount++){
        tblDataHTML += `
            <tr class="text-center">
            <td class="p-2"> ${itemCount++} </td> 
            <td> <img src="${cartItemList[rowCount].itemPhoto}" class="rounded-circle" width="40"> </td> 
            <td> ${cartItemList[rowCount].skuNum} </td> 
            <td> ${cartItemList[rowCount].itemName} </td> 
            <td> ${cartItemList[rowCount].itemPrice} </td> 
            <td> ${cartItemList[rowCount].itemQty} </td> 
            <td> ${cartItemList[rowCount].itemTotal} </td> 
            <td>
                <button class="btn btn-warning btn-sm me-2" onclick="decreaseQty(${rowCount})"> Minus </button> 
                <button class="btn btn-danger btn-sm" onclick="increaseQty(${rowCount})"> Plus </button> 
            </td> 
            </tr>
        `
    }
    
    document.getElementById('tbl-body').innerHTML = tblDataHTML;
}