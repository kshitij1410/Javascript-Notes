var form = document.getElementById('addform');
var itemList = document.querySelector('.list-group');
var filter = document.querySelector('#filter');

//add event in search
filter.addEventListener('click', search);

//submit event
form.addEventListener("submit", addItems);



//addItems
function addItems(e) {
    e.preventDefault();
    console.log(e.type);

    //get the value
    var newItemValue = document.getElementById('text1').value;

    //make a li tag
    var li = document.createElement('li');

    //add a classname in li
    li.className = 'list-group-item';

    //add value in li tag
    li.innerText = newItemValue;
    // li.appendChild(document.createTextNode(newItemValue))


    //create delete button 

    var deleteBtn = document.createElement('button');

    deleteBtn.style.float = "right"
    deleteBtn.className = "btn btn-danger delete "


    deleteBtn.textContent = 'X'
    li.appendChild(deleteBtn);

    //insert into itemList or ul 
    itemList.appendChild(li);
    document.getElementById('text1').value = null;

    //delete event
    deleteBtn.addEventListener("click", removeItem);
}

//remove item

// function removeItem(e){

//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure ?')){

//             //li
//             var li =e.target.parentElement;

//             //ul
//             itemList.removeChild(li);
//         }
//     }

// }

//delete event-------------method-2
// deleteBtn.addEventListener("click",removeItem);


function removeItem(e) {


    if (confirm('Are you sure ?')) {

        //li
        var li = e.target.parentElement;

        //ul
        itemList.removeChild(li);

    }


}

function search(e) {

    var newVal = document.getElementById('textSearch').value.toLowerCase();

    //select li
    var li = document.getElementsByTagName('li');
    // console.log(li);

    //convert html collection into array
    const arr = Array.from(li);
    console.log(arr);

    arr.forEach(function (item) {
        // item.innerText.toLowerCase();
        var itemName=item.firstChild.textContent; //bcz first element is value and second element is X
        if ( itemName.toLowerCase() === newVal) {
            item.style.display = 'block';
            console.log('block')
        } else {
            item.style.display = 'none';
            console.log('none')
        }
    })



}




















