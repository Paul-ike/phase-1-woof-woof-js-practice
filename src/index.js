document.addEventListener("DOMContentLoaded", ()=>{
    let isGoodDog = false;
    createSpan()
    toggleGooOrBad(isGoodDog)
})


const createSpan =  async()=> {
    const div = document.querySelector("#dog-bar")
    const dogs = await getDogs()
    const dogInfo = document.querySelector("#dog-info")
    const img = document.createElement("img")
    const btn = document.createElement("button")
    dogInfo.append(img)
    dogInfo.append(btn)
    dogs.map((dog)=> {
        const span = document.createElement("span");
        span.textContent = dog.name
        span.addEventListener("click", ()=> {
            img.setAttribute("src", dog.image)
            btn.textContent = dog.isGoodDog? "Good Dog!": "Bad Dog!"
        })
        div.appendChild(span)
    })
    
}

const getDogs = ()=> {
    return fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(data => data)
}

const toggleGooOrBad = (isGoodDog)=> {
    // const btn = document.querySelector("#good-dog-filter");
    // isGoodDog = !isGoodDog
    // btn.addEventListener("click", ()=>{
    //     fetch(`http://localhost:3000/pups?isGoodDog=${isGoodDog}`)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // })

    toggle = document.querySelector('#good-dog-filter')
        toggle.addEventListener('click', function(){
            fetch("http://localhost:3000/pups")
            .then(resp => resp.json())
            .then(function(data) {
                if(toggle.innerText === "Filter good dogs: OFF") {
                    toggle.innerText = "Filter good dogs: ON"
                    renderTrueFalseDog(data)
                } else {
                    toggle.innerText = "Filter good dogs: OFF"
                }

            })
            })
}