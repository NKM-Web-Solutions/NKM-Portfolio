window.addEventListener("load", (event) => {
    let index = document.getElementById("index");
    let cpPage = document.getElementById("cp");

    let pages = [index, cpPage]

    let nav = `
        <nav role="navigation">
                <ul class="nav">
                    <div class="links-row">
                        <li><img src="../assets/images/nkm-logo_v02.svg" class="nav-logo" alt="NKM Webdev"></li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Case Studies</li>
                    </div>
                    <li class="source-bold">+ Check Availability</li>
                </ul>
            </nav>
        `;

    pages.forEach((page) => {
        if(page) page.insertAdjacentHTML("afterbegin", nav);
    });
});