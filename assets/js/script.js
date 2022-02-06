// let headers = document.querySelectorAll(".tab-menu .header div");
// let contents = document.querySelectorAll(".tab-menu .content div")

// headers.forEach(header=>{
//     header.addEventListener("click",function () {

//     let activeElement = document.querySelector(".active");
//     activeElement.classList.remove("active");

//     this.classList.add("active");

//     contents.forEach(content =>{
//         if (this.getAttribute("data-id") != content.getAttribute("data-id")) {
//             content.classList.add("d-none")
//         }
//         else
//         {
//             content.classList.remove("d-none")
//         }
//     })
//     })
// })









let leftBtn = document.querySelector(".fa-chevron-left")
let rightBtn = document.querySelector(".fa-chevron-right")
let contents = document.querySelectorAll(".news div")


rightBtn.addEventListener("click", function () {
    
    contents.forEach(content=>{
        
        if (content.getAttribute("class")!="deactive") {
           content.classList.add("deactive")
        }
         
    })
})
leftBtn.addEventListener("click", function () {
    
    contents.forEach(content=>{
        
        
    })
})
