function setLang(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = el.getAttribute("data-" + lang);
    });
}

// Langue par défaut : anglais
setLang("en");





let currentPage = 1;
let postsPerPage = 5;

function paginate() {
    let posts = document.querySelectorAll(".post");
    posts.forEach((post, index) => {
        post.style.display =
            index >= (currentPage - 1) * postsPerPage &&
            index < currentPage * postsPerPage
                ? "block"
                : "none";
    });
}

function nextPage() {
    currentPage++;
    paginate();
}

function prevPage() {
    if (currentPage > 1) currentPage--;
    paginate();
}

paginate();



function changeImage(mainImageId, newSrc) {
    document.getElementById(mainImageId).src = newSrc;
}



function openTab(event, tabId) {

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    event.target.classList.add('active');
}


document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("menu-overlay");

    if (toggle && navLinks) {

        // Ouvrir / fermer menu
        toggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            overlay.style.display = navLinks.classList.contains("active") ? "block" : "none";
        });

        // Fermer menu en cliquant sur un lien
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                overlay.style.display = "none";
            });
        });

        // Fermer menu en cliquant sur l'overlay
        overlay.addEventListener("click", function () {
            navLinks.classList.remove("active");
            overlay.style.display = "none";
        });
    }

});


// Mettre en surbrillance la page active
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop(); // récupère le nom du fichier

    links.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("current");
        }
    });
});




document.querySelectorAll(".like-btn").forEach(btn => {

    btn.addEventListener("click", function(){

        let count = this.querySelector(".like-count");

        count.textContent = parseInt(count.textContent) + 1;

    });

});


document.querySelectorAll(".comment-toggle").forEach(btn => {

    btn.addEventListener("click", function(){

        let section = this.parentElement.nextElementSibling;

        section.style.display =
            section.style.display === "block" ? "none" : "block";

    });

});


document.querySelectorAll(".comment-submit").forEach(btn => {

    btn.addEventListener("click", function(){

        let section = this.parentElement;

        let input = section.querySelector(".comment-input");

        let list = section.querySelector(".comments-list");

        if(input.value.trim() !== ""){

            let div = document.createElement("div");

            div.classList.add("comment");

            div.textContent = input.value;

            list.appendChild(div);

            input.value = "";

        }

    });

});




function toggleText(button){

const text = button.previousElementSibling.querySelector(".more-text");

if(text.style.display === "inline"){
text.style.display = "none";
button.innerText = "See more";
}else{
text.style.display = "inline";
button.innerText = "See less";
}

}


// Toggle "See more" text
function toggleText(event) {
    event.preventDefault();
    const link = event.target;
    const moreText = link.previousElementSibling;
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        link.textContent = "See more";
    } else {
        moreText.style.display = "inline";
        link.textContent = "See less";
    }
}

// Lightbox
function openLightbox(src){
    const overlay = document.getElementById("lightbox-overlay");
    const img = document.getElementById("lightbox-img");
    img.src = src;
    overlay.style.display = "flex";
}

function closeLightbox(){
    const overlay = document.getElementById("lightbox-overlay");
    overlay.style.display = "none";
    document.getElementById("lightbox-img").src = "";
}


function toggleText(el) {
    const moreText = el.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        el.style.display = "none"; // cache le “See more” après clic
    }
}


function toggleText(elem) {
    // Trouver le <span class="more-text"> dans le même parent <p>
    const moreText = elem.previousElementSibling.querySelector('.more-text');
    if (!moreText) return;

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        elem.textContent = "See more";
    } else {
        moreText.style.display = "inline";
        elem.textContent = "Read less";
    }
}