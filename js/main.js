// Nasa Photo of the day
const key = 'DHf7kh55cAjgr5pWt1jrAPKOQnrGoklh9JCkrLqo'

let apod = () => {
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
   .then(res => res.json(res.body))
   .then(data =>{
       document.getElementById('nasaImg').src = data.url
       document.getElementById('nasaTitle').innerText=`${data.title} ${data.date}`
       document.getElementById('nasaDeet').innerText = ` ${data.explanation}`
    })
   .catch(err => console.log(err))
}

document.getElementById('nasaButton').addEventListener('click', apod)
