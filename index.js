async function traerPokemon (){
    try{
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
        const datos = await respuesta.json()
        for (const pokemon of datos.results) {
            const enlaces = pokemon.url
            const nombres = pokemon.name 
            imagenesPokemon(enlaces)
            const padre = document.getElementById("main")
            const contenedores = document.createElement("div")
            contenedores.classList.add("tarjetaPokemones")
            const imagenURL = await imagenesPokemon(enlaces)
            const textos = document.createElement("p")
            const img = document.createElement("img")
            img.classList.add("imagenPokemon")
            img.src = imagenURL
            padre.appendChild(contenedores)
            contenedores.appendChild(textos)
            contenedores.appendChild(img)
            textos.textContent = nombres

            

        }
    

    }catch(error){
        console.error(error,"no se puo manito")
    }
}
traerPokemon()
async function imagenesPokemon(url){
    const respuesta = await fetch (url)
    const datos = await respuesta.json()
    return datos.sprites.other['official-artwork'].front_default
}   
function filtro (){
    const buscador = document.getElementById("input")
    buscador.addEventListener("input",(event)=>{
        const valorBuscado = buscador.value.toLowerCase()
        console.log(valorBuscado)
        const tarjetas = document.querySelectorAll(".tarjetaPokemones")
        for (const tarjeta of tarjetas) {
            const nombrePokemon = tarjeta.getElementsByTagName("p")[0].textContent.toLowerCase()
            if (nombrePokemon.includes(valorBuscado)) {
                tarjeta.style.display = ""
            }else{
                tarjeta.style.display = "none";
            }
            
        }
    })   
}
filtro() 