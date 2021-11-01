
var prid = location.href;
var url = new URL(prid);
var proid = url.searchParams.get('id')
console.log(proid)


var rightDiv = document.getElementById("right-column")
var leftDiv =  document.getElementById("left-column")
 
var datapar = JSON.parse(localStorage.getItem("items"))

for(var i=0;i<datapar.length;i++)
{
    if(datapar[i].id == proid) {
leftDiv.innerHTML += `<img id="productImg" src="${datapar[i].photo}">`

rightDiv.innerHTML += `<div class="product-description">
     <h1 id="name">${datapar[i].playerName}</h1>
     <h4 id="brand">${datapar[i].from}</h4>
     <h3>Price : RS <span id="price"> ${datapar[i].price}</span></h3>
     <div class="description">
      <h3>
       <p id="description"> ${datapar[i].description}</p>      
    </h3>     
     </div>
</div>`
}
}
