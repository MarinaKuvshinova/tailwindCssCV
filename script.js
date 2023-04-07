(function(){
    openCloseFunction();
    function openCloseFunction (){
        const openCloseTxt = "open-close";
        const openCloseButtons = document.querySelectorAll(`.${openCloseTxt}-btn`);
        openCloseButtons.forEach(openCloseBtn => {
            openCloseBtn.addEventListener("click", function(e){
                e.preventDefault();
                const parentBox = e.target.closest(`.${openCloseTxt}`);
                parentBox.classList.toggle("hide");
                let isOpen = parentBox.classList.contains("hide");

                const hiddenBox = parentBox.querySelector(`.${openCloseTxt}-hidden`);
                hiddenBox.style.maxHeight = isOpen ?  null : hiddenBox.scrollHeight +'px';
            });
        });
    }

    openOnScroll();
    function openOnScroll() {
        let counter = 0;
        const navButtons = document.querySelectorAll('.nav button');
        navButtons.forEach(button => {
            button.addEventListener("click", function(e){
                e.preventDefault();
                const data = e.target.getAttribute("data-nav");
                const openClose = document.querySelector(`[data-section=${data}`);
                const header = document.querySelector("header");
                
                if (openClose.classList.contains("hide")) {
                    openClose.querySelector(".open-close-btn").click();
                }

                const offsetTop = openClose.offsetTop - header.offsetHeight;

                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            });
        });
    }
})();