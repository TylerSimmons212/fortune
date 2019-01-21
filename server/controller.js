let fortunes = [
    "The fortune you seek is in another cookie.",
    "A cynic is only a frustrated optimist.",
    "You will live long enough to open many fortune cookies.",
    "He who laughs at himself never runs out of things to laugh at.",
    "Never forget a friend. Especially if he owes you.",
    "It is a good day to have a good day.",
    "Hard work pays off in the future. Laziness pays off now.",
    "If a turtle doesn't have a shell, is it naked or homeless?",
    "Change is inevitable, except for vending machines."
]
let id = 0
let favorites=[]
 module.exports = {
     read:(req,res)=>{
         let random = Math.floor(Math.random() * 10)
         const randomFortune = fortunes[random]
         res.status(200)
         .send(randomFortune)
     },
     create:(req,res)=>{
         console.log(req.body.selectedFortune)
         favorites.push(req.body.selectedFortune)
         console.log(favorites)
         res.status(200)
         .send(favorites)
     },
     update:(req,res)=>{
        const randomFortune = fortunes[random]
        res.status(200)
        .send(randomFortune)
     },
     delete:(req,res)=>{
        const randomFortune = fortunes[random]
        const deleteID = req.params.id;    
        fortuneIndex = randomFortune.findIndex( fortune => fortune.id == deleteID );
        randomFortune.splice(fortuneIndex, 1);
        res.status(200)
         .send(randomFortune)
     }
 }