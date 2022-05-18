myjnia = ["0"]
czysz = ["0"]
wosk = ["0"]

 
var myjniaT = document.getElementById("myj");
var czynszT = document.getElementById("czy");
var woskT = document.getElementById("wosk");

var razT = document.getElementById("raz");
function razem(a,b,c) {
    
    suma = parseInt(a)+parseInt(b)+parseInt(c)
   console.log(suma)
   return suma
}
let dae = razem(myjnia[0],czysz[0],wosk[0])
razem()
myjB.addEventListener("click", function() {
    
     if (myjnia.length === 1) {
         myjnia = []
         myjnia.push("10")
         myjniaT.textContent = `Myjnia: $ ${myjnia[0]}`
    console.log(myjnia)
    raz.textContent = `Razem:` + razem(myjnia[0],czysz[0],wosk[0])
   }
    else 
    
    console.log("Juz dodane!")
} )
czyB.addEventListener("click", function() {
    
    if (czysz.length === 1) {
        czysz = []
         czysz.push("20");
    console.log(czysz)
    czynszT.textContent = `Czyszczenie: $ ${czysz[0]}`
  raz.textContent = `Razem:` + razem(myjnia[0],czysz[0],wosk[0])
   }
    else 
    
    console.log("Juz dodane!")
    
} )

woskB.addEventListener("click", function() {
    if (wosk.length === 1) {
        wosk = []
         wosk.push("30")
         woskT.textContent = `Wosk: $ ${wosk[0]}`
    
  raz.textContent = `Razem:` + razem(myjnia[0],czysz[0],wosk[0])

 
   }
    else 
    
    console.log("Juz dodane!")
    razem(myjnia[0],czysz[0],wosk[0])
} )




