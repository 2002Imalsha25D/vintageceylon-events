
// VINTAGE CEYLON MEDIA GALLERY

// Add your photos and videos here.
// The cover is the thumbnail visitors see before clicking.

const mediaItems = [

    {
        title: "MICE Expo 2026 – Visitors",
        category: "events",
        type: "video",
        src: "videos/mice-expo.mp4",
        cover: "images/mice-expo.png"
    },

    {
        title: "MICE Expo 2026 – Port City",
        category: "events",
        type: "video",
        src: "videos/port-city.mp4",
        cover: "images/port-city.png"
    },

    {
        title: "Batik Sessions",
        category: "workshops",
        type: "video",
        src: "videos/batik.mp4",
        cover: "images/batik.png"
    },

    {
        title: "Tie & Dye Session",
        category: "workshops",
        type: "video",
        src: "videos/tie-dye.mp4",
        cover: "images/tie-dye.png"
    },

    {
        title: "Traditional Pottery",
        category: "workshops",
        type: "video",
        src: "videos/pottery.mp4",
        cover: "images/pottery.png"
    },

    {
        title: "Ceylon Tea Tasting",
        category: "experiences",
        type: "video",
        src: "videos/tea-tasting.mp4",
        cover: "images/tea-tasting.png"
    },

    {
        title: "Gem Cutting",
        category: "experiences",
        type: "video",
        src: "videos/gem-cutting.mp4",
        cover: "images/gem-cutting.png"
    },

    {
        title: "Wellness Experiences",
        category: "experiences",
        type: "video",
        src: "videos/wellness.mp4",
        cover: "images/wellness.png"
    },

    {
        title: "69th IPA World Congress",
        category: "events",
        type: "video",
        src: "videos/police-summit.mp4",
        cover: "images/police-summit.png"
    },

    {
        title: "Angampora",
        category: "culture",
        type: "video",
        src: "videos/angampora.mp4",
        cover: "images/angampora.png"
    },

    {
        title: "Traditional Dancing",
        category: "culture",
        type: "video",
        src: "videos/traditional-dancing.mp4",
        cover: "images/traditional-dancing.png"
    }

];


// GALLERY ELEMENTS

const galleryGrid = document.getElementById("galleryGrid");

const mediaPopup = document.getElementById("mediaPopup");

const popupContent = document.getElementById("popupContent");


// DISPLAY GALLERY

function displayGallery(category = "all") {

    galleryGrid.innerHTML = "";

    const filteredItems = mediaItems.filter(item => {
        return category === "all" || item.category === category;
    });

    filteredItems.forEach(item => {

        const card = document.createElement("div");

        card.className = "gallery-card";

        const button = document.createElement("button");

        button.className = "gallery-image";

        button.type = "button";

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


        // OPEN MEDIA WHEN CLICKED

        button.addEventListener("click", () => {
            openMedia(item);
        });


        const title = document.createElement("h3");

        title.textContent = item.title;


        const label = document.createElement("p");

        label.textContent = item.type === "video"
            ? "WATCH VIDEO"
            : "VIEW PHOTO";


        card.appendChild(button);

        card.appendChild(title);

        card.appendChild(label);

        galleryGrid.appendChild(card);

    });

}


// OPEN VIDEO OR PHOTO

function openMedia(item) {

    popupContent.innerHTML = "";

    let media;

    if (item.type === "video") {

        media = document.createElement("video");

        media.src = item.src;

        media.controls = true;

        media.autoplay = true;

        media.playsInline = true;

    } else {

        media = document.createElement("img");

        media.src = item.src;

        media.alt = item.title;

    }

    popupContent.appendChild(media);

    mediaPopup.classList.add("show");

}


// CLOSE POPUP

function closeMedia() {

    const video = popupContent.querySelector("video");

    if (video) {
        video.pause();
    }

    mediaPopup.classList.remove("show");

    popupContent.innerHTML = "";

}

document.getElementById("closePopup").addEventListener("click", closeMedia);

mediaPopup.addEventListener("click", function(event) {

    if (event.target === mediaPopup) {
        closeMedia();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMedia();
    }

});


// CATEGORY FILTER BUTTONS

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        document.querySelector(".filter-btn.active")
            .classList.remove("active");

        this.classList.add("active");

        const selectedCategory = this.dataset.filter;

        displayGallery(selectedCategory);

    });

});


// LOAD ALL ITEMS WHEN PAGE OPENS

displayGallery();
