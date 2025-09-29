// ---------- Orders & Stock ----------
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let products = [
  {id:1,name:"Red Bull 473ml",price:33.99,img:"images/redbull.png",stock:50},
  {id:2,name:"Monster 500ml",price:18.99,img:"images/monster.png",stock:40},
  {id:3,name:"Dragon Energy 500ml",price:64.99,img:"images/dragon.png",stock:30},
  {id:4,name:"Switch Energy 500ml",price:11.90,img:"images/switch.png",stock:25},
  {id:5,name:"Score Energy 500ml",price:12.99,img:"images/score.png",stock:30},
  {id:6,name:"It's the Qhush 500ml",price:20.00,img:"images/qhush.png",stock:20},
  {id:7,name:"Super C 500ml",price:9.90,img:"images/superc.png",stock:35},
  {id:8,name:"Energade Naartjie 500ml",price:12.00,img:"images/energade.png",stock:40}
];

// ---------- Display Stock ----------
function displayStock(){
  const container=document.getElementById("stock-list");
  container.innerHTML="";
  products.forEach((p,index)=>{
    container.innerHTML+=`
      <div class="cart-item">
        <span>${p.name} - Price: R${p.price.toFixed(2)} - Stock: ${p.stock}</span>
        <button onclick="addStock(${index})">Add Stock</button>
      </div>
    `;
  });
}

// ---------- Add Stock ----------
function addStock(index){
  let amount=parseInt(prompt("Enter number of items to add:"));
  if(!isNaN(amount) && amount>0){
    products[index].stock+=amount;
    alert(`${amount} units added to ${products[index].name}`);
    displayStock();
  }
}

// ---------- Display Orders ----------
function displayOrders(){
  const container=document.getElementById("order-list");
  container.innerHTML="";
  orders.forEach((order,index)=>{
    container.innerHTML+=`
      <div class="cart-item">
        <p><strong>Order #${index+1}</strong></p>
        <p>User: ${order.name}</p>
        <p>Address: ${order.address}</p>
        <p>Payment: ${order.payment}</p>
        <p>Items: ${order.items.map(i=>i.name+" x1").join(", ")}</p>
        <p>Total: R${order.total.toFixed(2)}</p>
      </div>
    `;
  });
}

// ---------- Initialize ----------
displayStock();
displayOrders();
