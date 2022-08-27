// dicliar dom element

const menuElement = document.querySelectorAll(".menu");
const imageElement = document.querySelectorAll(".item");


menuElement.forEach(menuElement => {
    menuElement.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.dataset.filter;

        imageElement.forEach((item) => {
            if(filter === "all"){
                item.style.display = "block"
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block"
                }
                else{
                    item.style.display = "none"
                }
            }
        });
    })
});



