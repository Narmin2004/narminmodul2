let noteContainer = document.createElement("div");
noteContainer.classList.add("note-container");
let input = document.querySelector("input");
let box1 = document.querySelector(".box1");
let reset = document.querySelector(".icon2");
let enterValue = document.getElementById("enter-value");
let flag = true;
let addBtn = document.querySelector(".box2");
let sort = document.querySelector(".icon1");
let newArr = [];

addBtn.addEventListener("click",()=>{
    if (flag && input.value.length != 0 && input.value[0] != " ") {
        let note = document.createElement("div")
        note.classList.add("note")
        let p = document.createElement("p")
        p.style.overflowWrap = "break-word"
        let img = document.createElement("img")
        img.src= "./icon3.svg"
        img.addEventListener("mouseover",()=>{
            img.src= "./icon2.svg"
        })

        img.addEventListener("mouseleave",()=>{
            img.src= "./icon3.svg"
        })
        p.textContent = input.value
        note.append(p,img)
        noteContainer.append(note)
        box1.append(noteContainer)
        enterValue.style.display = "none"
        input.value=""
        flag = false   
        img.addEventListener("click",()=>{
            note.style.display = "none  "
        })
        let pler = document.querySelectorAll(".note p")
        sort.addEventListener("click", ()=>{
            pler.forEach(item => {
            newArr.push(item.textContent)
            newArr.sort()
            newArr.forEach(item1 =>{
                item =item1
            })
            })
        })
    }else{
        enterValue.style.display = "block"
        flag = true
    }
})

reset.addEventListener("mouseover",()=>{
    reset.src = "icon2.svg"
})
reset.addEventListener("mouseleave",()=>{
    reset.src = "icon3.svg"
})

reset.addEventListener("click",()=>{
    input.value = ""
})

sort.addEventListener("mouseover",()=>{
        sort.src = "icon4.svg"
})
sort.addEventListener("mouseleave",()=>{
    sort.src = "icon6.svg"
})

sort.addEventListener("click",()=>{
    sort.src = "icon5.svg"
})


function getList() {
    let rtr = [];
    [...document.querySelectorAll(".note")].forEach(item => {
        rtr.push(String(item.children[0].textContent));
    })
    return rtr;
}

function getSortedList () {
    return getList().sort();
}

function getSortedReversedList () {
    return getSortedList().reverse();
}

let flagReverse = false;

document.querySelector(".icon1").addEventListener("click",event => {
    let array;
    if (flagReverse) {
        array = getSortedReversedList();
    }
    else {
        array = getSortedList();
    }

    document.querySelectorAll(".note").forEach((item,ind) => {
        item.children[0].textContent = array[ind];
    })

    flagReverse = !flagReverse;

})