/* document.getElementById("btn").addEventListener("click",
    (event) =>{
        const inputValue = document.getElementById("input-field").value;

        const container = document.getElementById("comment");

        const p = document.createElement("p");
        p.classList.add("child");
        p.innerText = inputValue;

        // console.log(p);
        container.append(p);

        const allComments = document.getElementsByClassName("child");
        for(const allComment of allComments){
            allComment.addEventListener("click",
                (event) =>{
                    event.target.parentNode.removeChild(allComment);
                }
            )
        }
        

    }
    
) */


/* function searchItem(){
    let search = document.getElementById("search");
    let filter = search.value.toUpperCase();
    let ul = document.getElementById("menu"); 
    let li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        let element = li[i].getElementsByTagName("a")[0];
        let txtValue =  element.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }

        
    }
} */

function searchItem(){
    let search = document.getElementById("search");
    let filter = search.value.toUpperCase();
    let item = document.getElementById("card-items");
    let card = item.getElementsByTagName("div");

    for (let i = 0; i < card.length; i++) {
        let element = card[i].getElementsByTagName("h2")[0];
        let txtValue = element.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            card[i].style.display = "";
        }
        else{
            card[i].style.display = "none";
        }
        
    }
}

function showItem(card){
    // alert("clicked");
    let container = document.getElementById("show-card");
    container.innerHTML = "";

    let cloneCard = card.cloneNode(true);
    container.appendChild(cloneCard);
}