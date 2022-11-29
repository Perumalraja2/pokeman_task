



async function pokemon()

{

let pokeData = await fetch (`https://pokeapi.co/api/v2/pokemon/40/`)
let resultData = await pokeData.json()
console.log(resultData)
console.log("Ability")
console.log(resultData.abilities[0].ability.name)
console.log(resultData.abilities[1].ability.name)
console.log(resultData.moves[0].move.name)
    console.log(resultData.abilities[2].ability.name)
    console.log("")
    console.log("weight")



console.log(resultData.weight)
console.log("")

console.log(resultData.sprites.other["official-artwork"].front_default)

for(i=1;i<=50;i++){
let apokeData = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
let aresultData = await apokeData.json()
console.log(aresultData)

    let ConT = document.createElement('div')
    ConT.className="container"
    document.body.append(ConT)
    ConT.innerHTML=`<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${aresultData.sprites.other["official-artwork"].front_default}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${aresultData.name}</h5>
         <p class="card-text"><b>Abilities : </b> ${aresultData.abilities[0].ability.name}</p>
          <p class="card-text"><b>Move:</b>${aresultData.moves[0].move.name}</small></p>
          <p class="card-text"><b>Weight:</b>${aresultData.weight}</small></p>
          </div
      </div>
    </div>
    </div>`
    }
    
    

}
pokemon()