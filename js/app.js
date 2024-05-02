window.addEventListener("load", (event) => {
    let index = document.getElementById("index");
    let cpPage = document.getElementById("cp");
    let ambassadorsPage = document.getElementById("ambassadors");
    let aboutPage = document.getElementById("about");

    let pages = [index, cpPage, ambassadorsPage, aboutPage];
    let mainCta = document.getElementById("cta-main");
    let navCta = document.getElementById("cta-nav");

    if(mainCta) {
        mainCta.addEventListener("click", scrollToForm);
    }

    let nav = `
        <nav role="navigation">
            <div class="nav-mobile">
                <a href="/"><img src="../assets/images/nkm-logo_v02.svg" class="nav-logo" alt="NKM Webdev"></a>
                <div class="hamburger" id="toggle-menu">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </div>
            </div>
            <ul class="nav nav-collapse" id="nav-menu">
                <div class="links-row">
                    <li><a href="/"><img src="../assets/images/nkm-logo_v02.svg" class="nav-logo logo-desktop" alt="NKM Webdev"></a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about.html">About Me</a></li>
                    <li><a href="/cp.html">Case Studies</a></li>
                </div>
                <li class="source-bold"><a href="/#form-section">+ Check Availability</a></li>
            </ul>
        </nav>
    `;

    let footer = `
        <footer>
            <div class="home__footer-wrapper">
                <div class="home__footer-group">
                    <a href="/"><img src="../assets/images/nkm-logo_v02.svg" alt="NKM Webdev"></a>
                </div>
                <div class="home__footer-group">
                    <h4>Links</h4>
                    <ul class="home__footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about.html">About Me</a></li>
                        <li><a href="/cp.html">Case Studies</a></li>
                    </ul>
                </div>
                <div class="home__footer-group">
                    <h4>Contact</h4>
                    <ul class="home__footer-links">
                        <li>someemail@test.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    `;

    function scrollToForm(){
        let formSection = document.getElementById("form-section");
        formSection.scrollIntoView({
            behavior: "smooth"
        });
    }

    pages.forEach((page) => {
        if(page) { 
            page.insertAdjacentHTML("afterbegin", nav);
            page.insertAdjacentHTML("beforeend", footer);
            let menuToggle = document.getElementById("toggle-menu");
            let menu = document.getElementById("nav-menu");
            if (menu && window.innerWidth < 499) { 
                menu.style.visibility = "hidden"
                menu.style.padding = "0"
            };
            if(menuToggle) menuToggle.addEventListener("click", function(){
                if(menu.style.visibility == "hidden") {
                    menu.style.visibility = "visible";
                    menu.style.padding = "3rem 1.25rem";
                    menu.classList.add("nav-collapse--open");
                } else {
                    menu.style.visibility = "hidden";
                    menu.style.padding = "0"
                    menu.classList.remove("nav-collapse--open")
                }
            })
        };
    });
});