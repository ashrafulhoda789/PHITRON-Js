/* // const target = document.getElementsByClassName("title");
// console.log(target[0]);

const target = document.getElementById("title");
// console.log(target);

target.style.color = "red";

const allBox = document.getElementsByClassName("box");

console.log(allBox);

for (let i = 0; i < allBox.length; i++) {
    const element = allBox[i];
    // console.log(element);
    element.style.backgroundColor = "green";
    if(element.innerText == "Box-5"){
        element.style.backgroundColor = "red";
    }
    
}

 */

document.getElementById("handleADD").addEventListener("click",
    (event) => {
        // console.log("Hello Box");
        const inputValue = document.getElementById("search_box").value;
        // console.log(inputValue);
        const container = document.getElementById("comment-container");

        const p = document.createElement("p");
        p.classList.add("child");
        p.innerText = inputValue;

        // console.log(p);
        container.append(p);
        document.getElementById("search_box").value = "";

        const allComments = document.getElementsByClassName("child");
        for (const element of allComments) {
            element.addEventListener("click",
                (event) => {
                    event.target.parentNode.removeChild(element);
                }
            )
        }
   
    }
);

// const handleSearch = (event) => {
//     console.log("Hello Box");
// }