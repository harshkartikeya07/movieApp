// for fetch data with the help of api

async function search(){
    try{
    let a =document.querySelector("#query").value    
    let x = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${a}`)
    let y=  await x.json()
    let data = y.Search
    function store(data){
        document.querySelector("#container").innerHTML=""
        document.querySelector(".basic").innerHTML=""
    data.forEach(function(e,i){
          
    let box=document.createElement("div")
    box.setAttribute("id","box")
    let img=document.createElement("img")
    img.src=e.Poster
    let name=document.createElement("p")
    name.innerText=`Name ${e.Title} `
    let date=document.createElement("p")
    date.innerText=`Realing Date ${e.Year} `
    let rating=document.createElement("p")
    rating.innerText=`IMDB ${e.imdbID} `
    box.append(img,name,date,rating)
    document.getElementById('container').append(box)
    })
    }
    store(data)

    //for filter
  document.querySelector("#name").addEventListener("click",function(){
    
          let x=  data.sort(function(a,b){
            if(a.imdbID>b.imdbID) return 1
            if(a.imdbID<b.imdbID) return -1
            return 0
          });
          console.log(x)
        store(data)
  })

  let newPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
    if(data!=null){
        resolve(data)
    }
    },4000) 
    })
    newPromise.then(function(res){
        store(res)
    })
    
 
    }
    catch(err){
        console.log(err)
    }
}



//for slide

let k=['https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6530/1326530-h-f2a7e4e4e3d6','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7972/1317972-h-3217e6c47ab5','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3826/1323826-h-d2a900e9acb7']


function slideShow(){
let box=document.querySelector("#slide")
let i=0;
let img=document.createElement("img")
img.src=k[0]
img.id="banner"


box.append(img)
setInterval(function(){
    i++
if(i===3){
    i=0;
}

img.src=k[i]
box.append(img)
},3000)

}

slideShow()
