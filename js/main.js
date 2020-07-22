if (localStorage.getItem("contacts") == undefined) {
  localStorage.setItem("contacts", "[]");
}

let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));

for (i = 0; i < contacts.length; i++) {
  result +=`
    <div class="contact_item">
                    <i class="far fa-user fa-2x color_primary"></i>
                    <div class="contact_item_info">
                        <h4>${contacts[i].name}</h4>
                        <p>+91-${contacts[i].phone}</p>
                    </div>
                    <i class="fas fa-trash del" onClick="deleteContact('${contacts[i].token}')"></i>
                </div>
    `
}
document.getElementsByClassName("contact_body")[0].innerHTML=result;


var submitContact = (e) => {
  e.preventDefault();
  let contact_name = document.getElementById("name").value;
  let contact_number = document.getElementById("number").value;

  let contacts = JSON.parse(localStorage.getItem("contacts"));

  let contact = {
    token:Math.random().toString(36).substr(2,9),
    name: contact_name,
    phone: contact_number,
  };

  contacts.unshift(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";


  location.reload();
};

var deleteContact=(token)=>{
    let contacts = JSON.parse(localStorage.getItem("contacts"));

    contacts=contacts.filter((contact)=>{
        return contact.token !=token;
    });
    localStorage.setItem("contacts",JSON.stringify(contacts));
    location.reload();
}
