window.addEventListener("load", (event) => {
    let index = document.getElementById("index");
    let cpPage = document.getElementById("cp");

    let pages = [index, cpPage]

    let nav = `
        <nav role="navigation">
                <ul class="nav">
                    <div class="links-row">
                        <li><img src="../assets/images/nkm-logo.svg" alt="NK Media"></li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Case Studies</li>
                    </div>
                    <li class="source-bold">+ Let's Work Together</li>
                </ul>
            </nav>
        `;

    pages.forEach((page) => {
        if(page) page.insertAdjacentHTML("afterbegin", nav);
    });
});