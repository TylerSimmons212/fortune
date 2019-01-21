let fortunes = [
   { id:1, text:"The fortune you seek is in another cookie."},
    {id:2, text:"A cynic is only a frustrated optimist."},
    {id:3, text:"You will live long enough to open many fortune cookies."},
    {id:4, text:"He who laughs at himself never runs out of things to laugh at."},
    {id:5, text:"Never forget a friend. Especially if he owes you."},
    {id:6, text:"It is a good day to have a good day."},
    {id:7, text:"Hard work pays off in the future. Laziness pays off now."},
    {id:8, text:"If a turtle doesn't have a shell, is it naked or homeless?"},
    {id:9, text:"Change is inevitable, except for vending machines."}
]
let id = 1
let favorites=[]
 module.exports = {
     read:(req,res)=>{
         let random = Math.floor(Math.random() * 10)
         const randomFortune = fortunes[random]
         res.status(200)
         .send(randomFortune)
     },
     create:(req,res)=>{
         let fortune = {id,text:req.body.selectedFortune}
         console.log(req.body.selectedFortune)
         id++
         favorites.push(fortune)
         console.log(favorites)
         res.status(200)
         .send(favorites)
     },
     update: (req,res) => {
        res.status(200).send( favorites );
    },
     delete:(req,res)=>{
        const deleteId = req.params.id;
        console.log(deleteId)    
        let fortuneIndex = favorites.findIndex( fortune => fortune.id == deleteId);
        console.log(fortuneIndex);
        
        favorites.splice(fortuneIndex, 1);
        console.log(favorites);
        
        res.status(200)
         .send(favorites)
     }
 }