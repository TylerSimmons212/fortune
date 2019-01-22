let fortunes = [
   { id:0, text:"The fortune you seek is in another cookie."},
    {id:1, text:"A cynic is only a frustrated optimist."},
    {id:2, text:"You will live long enough to open many fortune cookies."},
    {id:3, text:"He who laughs at himself never runs out of things to laugh at."},
    {id:4, text:"Never forget a friend. Especially if he owes you."},
    {id:5, text:"It is a good day to have a good day."},
    {id:6, text:"Hard work pays off in the future. Laziness pays off now."},
    {id:7, text:"If a turtle doesn't have a shell, is it naked or homeless?"},
    {id:8, text:"Change is inevitable, except for vending machines."}
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
         let fortune = {id,text:req.body.selectedFortune}
         console.log(req.body.selectedFortune)
         id++
         favorites.push(fortune)
         console.log(favorites)
         res.status(200)
         .send(favorites)
     },
     update: (req,res) => {
         console.log('here');
         
        let {id} = req.params;
        let {text} = req.body
        
         let editedFave;
         editedFave = favorites.map((ele,i)=>{
         
            if(+id===i){
                console.log('foun me');                
                ele.text=text
            }
            return ele;   
           
        })
        console.log(editedFave);
        
        res.status(200).send(editedFave)
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