function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) {
      return false;
      }
      currentFocus = -1;
      
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      
      this.parentNode.appendChild(a);
      
      for (i = 0; i < arr.length; i++) {
      
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
        
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
         
          b.addEventListener("click", function(e) {
              
              inp.value = this.getElementsByTagName("input")[0].value;
              
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  
  function closeAllLists(elmnt) {
    
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

var teams=["Royal Challengers Bangalore","Mumbai Indians","Kings XI Punjab","Delhi Capitals","Kolkata Knight Riders","Rajasthan Royals","Sunrisers Hyderbad","Chennai Super Kings"]


autocomplete(document.getElementById("myInput"), teams);


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



function insert() {
  var playername = document.getElementById("PlayerName").value;
  var teamname = document.getElementById("team").value;
  var price = document.getElementById("price").value;
  var isPlaying = document.getElementById("isPlaying").value;
  var description = document.getElementById("Description").value;
  var photo = document.getElementById("photo").value;

  var datapar = JSON.parse(localStorage.getItem("items"))

  var mobj ={
    "id": datapar.length,
    "playerName":playername ,
    "from": teamname,
    "price": price,
    "isPlaying": isPlaying,
    "description": description,
    "photo":photo
 } 
 var data = JSON.parse(localStorage.getItem("items")) 
 data.push(mobj);
 localStorage.setItem("items",JSON.stringify(data))
alert("data inserted");

}


