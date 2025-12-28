let country = document.getElementById('country')
let inp = document.querySelector('.user')
let button = document.querySelector('.btn')
let rlt = document.querySelector('.result')
let city = document.querySelector('.city')
let ctry = document.querySelector('.countr')
let villes =['abidjan','divo','niakara','katiola','boundialy'] 
let pays =['Gabon','Ghana','Benin','pays-bas','Egypte']
let game = "" 
let score = 0
let i = 0
function affCountry(v){ 
    country.textContent = v
}
function affScore(score,total){
    rlt.textContent =`votre score est de ${score} sur ${total}`
}   
city.addEventListener("click",()=>{
     score = 0
     i = 0
     game= "ville"
     affCountry(villes[i])
     affScore(score,villes.length)
     
})
ctry.addEventListener("click",()=>{
    score = 0
    i = 0
    game = "pays"
    affCountry(pays[i])
    affScore(score,pays.length)
})
button.addEventListener("click",()=>{
    if(game === "ville"){
        if(inp.value === villes[i]){
            score++
        }

     i++
    affCountry(villes[i])
    affScore(score,villes.length)
    inp.value =""
    } 
    
    if(game==="pays"){
        if(inp.value === pays[i]){
            score++
        }
        i++
     affCountry(pays[i])
     affScore(score,pays.length)
      inp.value ="" 
    }
    

    
})














 
/* function vill(){
      let score = 0
        let i = 0
    affCountry(villes[i])
    button.addEventListener("click",()=>{
        if(inp.value === villes[i]){
            score++
        }  
        i++
        affScore(score,villes.length)
        inp.value=''
         affCountry(villes[i])
        if(villes[i] === undefined){
            affCountry('jeux  terminé ✅')
           
        } 
    })  
      
}
function pay(){
    let scor = 0
        let j = 0
    affCountry(pays[j])
    button.addEventListener("click",()=>{
        if(inp.value === pays[j]){
            scor++
        }  
        j++
        scorePays(scor,pays.length)
        inp.value=''
         affCountry(pays[j])
        if(pays[j] === undefined){
            affCountry(' jeux  terminé ✅')
        }
       
    })

}

city.addEventListener("click",()=>{
      
})
ctry.addEventListener("click",()=>{
    
})



 */