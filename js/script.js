
// ==========================================
// VINTAGE CEYLON EVENTS & EXPERIENCES
// DIGITAL MEDIA GALLERY
// ==========================================


// VIDEO LINKS - GOOGLE DRIVE

const videoLinks = {

    "mice-expo": "https://drive.google.com/file/d/1UuqvpPVi7bu1ThAPFP9JanralsPeB2ZW/preview",

    "port-city": "https://drive.google.com/file/d/1Zy_urRDJgNSGI1VOxR84TCfDiSx_jjrT/preview",

    "batik": "https://drive.google.com/file/d/1iJWjTSnoVQzhZR1WWgwphrIwW-eBf74I/preview",

    "tie-dye": "https://drive.google.com/file/d/1OFYkrvYp_jLF9aMKjPi6jed0vMLStO0Z/preview",

    "pottery": "https://drive.google.com/file/d/1BiO_vixziHw-JvUOvFkr2Ki8lLGJ3wlQ/preview",

    "tea-tasting": "https://drive.google.com/file/d/1lT-hBILqrNvzhfZlOmv4eaivlzaFitWB/preview",

    "gem-cutting": "https://drive.google.com/file/d/1drNh_vyQDeG_yQgdiRlOoQ-zXBmbBdLq/preview",

    "police-summit": "https://drive.google.com/file/d/13GzVzztPt__Rbc0bLOaR_59peawHBe7_/preview",

    "angampora": "https://drive.google.com/file/d/1XaOfPs4ulkqiNR-LKaoyRkwCXuhxHrdy/preview",

    "traditional-dancing": "https://drive.google.com/file/d/1L9sUtqcyvdRr5rrcL00JVDyugwP6HiYc/preview"

};


// ==========================================
// MEDIA ITEMS
// ==========================================

const mediaItems = [

    {
        title: "MICE Expo 2026 – Visitors",
        category: "events",
        type: "video",
        videoKey: "mice-expo",
        cover: "images/mice-expo.png"
    },

    {
        title: "MICE Expo 2026 – Port City",
        category: "events",
        type: "video",
        videoKey: "port-city",
        cover: "images/port-city.png"
    },

    {
        title: "Batik Sessions",
        category: "workshops",
        type: "video",
        videoKey: "batik",
        cover: "images/batik.png"
    },

    {
        title: "Tie & Dye Session",
        category: "workshops",
        type: "video",
        videoKey: "tie-dye",
        cover: "images/tie-dye.png"
    },

    {
        title: "Traditional Pottery",
        category: "workshops",
        type: "video",
        videoKey: "pottery",
        cover: "images/pottery.png"
    },

    {
        title: "Ceylon Tea Tasting",
        category: "experiences",
        type: "video",
        videoKey: "tea-tasting",
        cover: "images/tea-tasting.png"
    },

    {
        title: "Gem Cutting",
        category: "experiences",
        type: "video",
        videoKey: "gem-cutting",
        cover: "images/gem-cutting.png"
    },

    {
        title: "Wellness Experiences",
        category: "experiences",
        type: "video",
        videoKey: null,
        cover: "images/wellness.png"
    },

    {
        title: "69th IPA World Congress",
        category: "events",
        type: "video",
        videoKey: "police-summit",
        cover: "images/police-summit.png"
    },

    {
        title: "Angampora",
        category: "culture",
        type: "video",
        videoKey: "angampora",
        cover: "images/angampora.png"
    },

    {
        title: "Traditional Dancing",
        category: "culture",
        type: "video",
        videoKey: "traditional-dancing",
        cover: "images/traditional-dancing.png"
    }

];


// ==========================================
// GALLERY ELEMENTS
// ==========================================

const galleryGrid = document.getElementById("galleryGrid");

const mediaPopup = document.getElementById("mediaPopup");

const popupContent = document.getElementById("popupContent");

const closePopupButton = document.getElementById("closePopup");


// ==========================================
// DISPLAY GALLERY
// ==========================================

function displayGallery(category = "all") {

    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    const filteredItems = mediaItems.filter(item => {

        return category === "all" || item.category === category;

    });


    filteredItems.forEach(item => {

        const card = document.createElement("div");

        card.className = "gallery-card";


        // IMAGE BUTTON

        const button = document.createElement("button");

        button.className = "gallery-image";

        button.type = "button";


        // COVER IMAGE

        const image = document.createElement("img");

        image.src = item.cover;

        image.alt = item.title;

        image.loading = "lazy";

        image.onerror = () => {

            image.style.display = "none";

            button.style.background = "#ded8cf";

        };

        button.appendChild(image);


        // VIDEO PLAY ICON

        if (item.type === "video") {

            const playIcon = document.createElement("span");

            playIcon.className = "play-icon";

            playIcon.innerHTML = "&#9654;";

            button.appendChild(playIcon);

        }


        // OPEN MEDIA

        button.addEventListener("click", () => {

            openMedia(item);

        });


        // TITLE

        const title = document.createElement("h3");

        title.textContent = item.title;


        // LABEL

        const label = document.createElement("p");

        label.textContent = item.type === "video"
            ? "WATCH VIDEO"
            : "VIEW PHOTO";


        // ADD ELEMENTS

        card.appendChild(button);

        card.appendChild(title);

        card.appendChild(label);

        galleryGrid.appendChild(card);

    });

}


// ==========================================
// OPEN VIDEO OR PHOTO
// ==========================================

function openMedia(item) {

    if (!popupContent || !mediaPopup) return;

    popupContent.innerHTML = "";


    // GOOGLE DRIVE VIDEO

    if (item.type === "video") {

        const videoUrl = videoLinks[item.videoKey];


        // VIDEO LINK NOT AVAILABLE

        if (!videoUrl) {

            const message = document.createElement("p");

            message.textContent = "This video will be available soon.";

            message.style.textAlign = "center";

            message.style.padding = "30px";

            popupContent.appendChild(message);

        } else {

            const iframe = document.createElement("iframe");

            iframe.src = videoUrl;

            iframe.title = item.title;

            iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";

            iframe.allowFullscreen = true;

            iframe.loading = "eager";

            iframe.referrerPolicy = "strict-origin-when-cross-origin";

            iframe.style.width = "100%";

            iframe.style.height = "100%";

            iframe.style.border = "0";

            iframe.style.display = "block";


            popupContent.appendChild(iframe);

        }

    } else {

        // PHOTO

        const image = document.createElement("img");

        image.src = item.src;

        image.alt = item.title;

        popupContent.appendChild(image);

    }


    // SHOW POPUP

    mediaPopup.classList.add("show");

}


// ==========================================
// CLOSE POPUP
// ==========================================

function closeMedia() {

    if (!popupContent || !mediaPopup) return;


    // Removing iframe stops video playback

    popupContent.innerHTML = "";


    mediaPopup.classList.remove("show");

}


// CLOSE BUTTON

if (closePopupButton) {

    closePopupButton.addEventListener("click", closeMedia);

}


// CLICK OUTSIDE POPUP

if (mediaPopup) {

    mediaPopup.addEventListener("click", function(event) {

        if (event.target === mediaPopup) {

            closeMedia();

        }

    });

}


// ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMedia();

    }

});


// ==========================================
// CATEGORY FILTER BUTTONS
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {


        // REMOVE PREVIOUS ACTIVE CLASS

        const activeButton = document.querySelector(".filter-btn.active");

        if (activeButton) {

            activeButton.classList.remove("active");

        }


        // SET NEW ACTIVE BUTTON

        this.classList.add("active");


        // DISPLAY SELECTED CATEGORY

        const selectedCategory = this.dataset.filter;

        displayGallery(selectedCategory);

    });

});


// ==========================================
// LOAD GALLERY WHEN PAGE OPENS
// ==========================================

displayGallery();
