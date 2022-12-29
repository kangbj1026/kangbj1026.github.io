navItems();

function navItems() {
    let links = [
        ['Home', './'],
        ['Projects', './#projects'],
        ['Studying', './'],
        ['Spring Boot MVC Portfolio', './react1026']
    ];

    let navbar = document.querySelector('.navbar');
    let navLogoDiv = document.createElement('div');
    let navLogoI = document.createElement('i');
    let navLogoLink = document.createElement('a');
    let navUl = document.createElement('ul');
    let navToggleBtn = document.createElement('a');
    let navToggleI = document.createElement('i');

    navLogoDiv.classList.add("navbar_logo");
    navLogoI.classList.add("fa-solid","fa-code");
    navLogoLink.classList.add("link");
    navLogoLink.innerText = " Coding Portfolio";
    navUl.classList.add("navbar_menu");
    navToggleBtn.classList.add("navbar_toggleBtn");
    navToggleI.classList.add("fa-solid","fa-bars");

    links.map((link) => {
        let itemsLi = document.createElement('li');
        itemsLi.classList.add("nav_item");
        let aTag = document.createElement('a');

        aTag.innerHTML = link[0];
        aTag.href = link[1];
        itemsLi.appendChild(aTag);
        navUl.appendChild(itemsLi);
    });

    navLogoDiv.appendChild(navLogoI);
    navLogoDiv.appendChild(navLogoLink);

    navbar.appendChild(navLogoDiv);
    navbar.appendChild(navUl);
    navbar.appendChild(navToggleBtn);
    navToggleBtn.appendChild(navToggleI);
}

const toggleBtn = document.querySelector(".navbar_toggleBtn");

toggleBtn.addEventListener( 'click', (eve) => {
    const section = document.querySelector('section');
    const navMenu = document.querySelector('.navbar_menu');
    section.classList.toggle('active');
    navMenu.classList.toggle('active');
    let i = "0";
    if (section.classList.length > 1) {
        document.querySelector(".f_div1").style.opacity = i;
        document.querySelector(".f_div2").style.opacity = i;
    } else {
        document.querySelector(".f_div1").style.removeProperty("opacity");
        document.querySelector(".f_div1").style.removeProperty("transition-duration");
        i++;
        document.querySelector(".f_div1").style.opacity = i;
        document.querySelector(".f_div2").style.opacity = i;
    }
})
