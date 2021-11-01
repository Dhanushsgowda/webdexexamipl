

var prid = location.href;
var url = new URL(prid);
var proid = url.searchParams.get('id')
console.log(proid)


var teamdata = JSON.parse(localStorage.getItem("teams"));
var teamName;

for(var i=0;i<teamdata.length;i++){
    if(teamdata[i].id == proid || teamdata[i].TeamName == proid) {
        teamName = teamdata[i].shortname;
    }
}

 var datapar = JSON.parse(localStorage.getItem("items"))
var team_list = document.getElementById("players-list")
for(var i=0;i<datapar.length;i++){
    if(datapar[i].from ==  teamName ){
team_list.innerHTML += `<div class="product-card" onclick="myfun(${datapar[i].id})" >
            <img class="product-image" src="${datapar[i].photo}"/>
        <div class="product-meta">
            <h4>Name : ${datapar[i].playerName}</h4>
            <h4>Team : ${datapar[i].from}</h4>
            <h5>Price : ${datapar[i].price}</h5>
            <p>playing status : ${datapar[i].isPlaying}</p>
            <p>Role : ${datapar[i].description}</p>
        </div>
        </div>`
    }

}

function myfun(tid) {
    location.assign("playerDetailspage.html?id="+tid)
}