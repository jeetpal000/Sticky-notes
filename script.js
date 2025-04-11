let textArea = document.getElementById("text_area");
let button = document.querySelector("#btn");
let color = document.getElementById('color');
let notes = document.getElementById('notes');
let msg = document.getElementById('msg');


function addNotes(){
    if(textArea.value === ""){
        // alert("hbjknmf");
        return;
    }
    
        let div = document.createElement("div");
        let p = document.createElement("p");
        let cross_btn = document.createElement("button");

        div.appendChild(p);
        div.appendChild(cross_btn);
        cross_btn.innerText = 'x';
        p.innerText = textArea.value;

        div.style.backgroundColor = color.value;
        notes.appendChild(div);
        textArea.value = "";
        msg.style.display="none";
        cross_btn.addEventListener('click', function(){
        div.style.display="none";
    });
        div.classList.add('notes_container');
        p.classList.add('note');
        cross_btn.classList.add('btn');
    

}
button.addEventListener('click', addNotes);
