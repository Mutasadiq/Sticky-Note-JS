const noteContainer=document.querySelector(".note-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes",noteContainer.innerHTML);
}

createBtn.addEventListener("click",function(e){
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="recycle bin.png";
    noteContainer.appendChild(inputBox).appendChild(img);
});

noteContainer.addEventListener("click",function(e){
    if(e.target.tagName==="img" || e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                updateStorage();
            }
        });
    }
});

function showStorage(){
    noteContainer.innerHTML=localStorage.getItem("notes");   
   }
   showStorage();
  

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertBreakLine");
        event.preventDefault;
    }
});
