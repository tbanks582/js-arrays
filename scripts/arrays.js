//console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards
// function printCards(){
//     for(let card of data){
//         printCard(card);
//     }
// }

let currCards = data.items;

function printCard(item){ // have to specify that item has certain parameters
    var prereq = item.prereqs.toString();
    if(item.prereqs.length==0) prereq = "No prerequisites for this class";
    var card = `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <h3 class="card-header">${item.prefix + item.number.toString()}</h3>
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">credits: ${item.credits.toString()}</h6>
          <p class="card-text">${item.desc}</p>
          <a href="${item.url}" class="card-link">catalog URL</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        <div class="card-footer">${prereq}</div>
      </div>
    </div>
    `
    //console.log(card);
    var node = document.getElementById("start");
    node.innerHTML += card;
    return card;
}

function printCards(){
  let query = document.getElementsByClassName("form-control me-2")[0].value;
  console.log(currCards);
  if(query==""){
    currCards = data.items;
  } else {
    currCards = data.items.filter(item=>item.number>300); 
    console.log(currCards); // I have absolutely no idea why this doesnt work :v
  }
  const courseCards = currCards.map(item =>{ // not a very good use of map but w/e
    printCard(item);
  });
  //console.log(courseCards); // idk why this doesnt work :v
}
// 2. maybe we only show those that match the search query?
