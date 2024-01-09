function handleEvent(e) {
  e.preventDefault();

  const inputAmt = document.getElementById("inputAmount").value;
  const inputDesc = document.getElementById("inputdesc").value;
  const inputCat = document.getElementById("mySelect");
  const item = inputCat.options[inputCat.selectedIndex].text;
  const list = document.getElementById("list");
  list.innerHTML += `<li class="p-2"id=${inputAmt}>${inputAmt}-${inputDesc}-${item}
    <button id="delete-btn"   class="btn btn-danger m-2" onclick=deleteUserDetails('${inputAmt}')>Delete</button>
    <button id="edit-btn"   class="btn btn-success m-2" onclick=EditUserDetails('${inputAmt}','${inputDesc}','${item}')>Edit</button>
    </li> `;

  const obj = {
    amount: parseFloat(inputAmt),
    description: inputDesc,
    category: item,
  };
  const parsedData = JSON.stringify(obj);
  localStorage.setItem(inputAmt, parsedData);

  document.getElementById("inputAmount").value = "";
  document.getElementById("inputdesc").value = "";
  document.getElementById("mySelect").value = "";
}

function deleteUserDetails(amount) {
  const parentNode = document.getElementById("list");
  const childNodeToBeDeleted = document.getElementById(amount);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
  localStorage.removeItem(amount);
}

function EditUserDetails(amt, desc, cat) {
  document.getElementById("inputAmount").value = amt;
  document.getElementById("inputdesc").value = desc;
  document.getElementById("mySelect").value = cat;
  deleteUserDetails(amt);
}
