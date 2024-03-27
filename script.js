const albumsMetroBoomin = [
    {
        titulo: "19 & Boomin",
        fechaLanzamiento: "19 de junio de 2014",
        imagenPortada: "https://images.genius.com/8a4fe393a9c3a1c2eca3e55eff0db85b.1000x1000x1.jpg",
        linkSpotify: "https://open.spotify.com/album/4noznx2aXnB8mv1ELDgM2f",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Savage Mode",
        fechaLanzamiento: "15 de julio de 2016",
        imagenPortada: "https://upload.wikimedia.org/wikipedia/en/6/6e/21_Savage_and_Metro_Boomin_-_Savage_Mode.png",
        linkSpotify: "https://open.spotify.com/album/2nbWXya7G2Ilf2yN8e21nN",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Perfect Timing",
        fechaLanzamiento: "21 de julio de 2017",
        imagenPortada: "https://upload.wikimedia.org/wikipedia/en/9/9f/PerfectTimingNavMetroBoomin.jpg",
        linkSpotify: "https://open.spotify.com/album/1emx3li4MDRaOSD5gHbOrA",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Double or Nothing",
        fechaLanzamiento: "8 de diciembre de 2017",
        imagenPortada: "https://upload.wikimedia.org/wikipedia/en/6/65/Big_Sean_and_Metro_Boomin_%E2%80%93_Double_or_Nothing.png",
        linkSpotify: "https://open.spotify.com/album/0Ls4LJVn5QOSzl1iALpZ2H",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Without Warning",
        fechaLanzamiento: "31 de octubre de 2017",
        imagenPortada: "https://upload.wikimedia.org/wikipedia/en/d/de/21_Savage%2C_Offset_%26_Metro_Boomin_-_Without_Warning.png",
        linkSpotify: "https://open.spotify.com/album/6VYTeIm0xSZn8XjKwzPtyD",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Not All Heroes Wear Capes",
        fechaLanzamiento: "2 de noviembre de 2018",
        imagenPortada: "https://upload.wikimedia.org/wikipedia/en/2/28/Metro_Boomin_%E2%80%93_Not_All_Heroes_Wear_Capes.png",
        linkSpotify: "https://open.spotify.com/album/5AhF7U53sBijF4Nh4kmpsr",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Savage Mode II",
        fechaLanzamiento: "2 de octubre de 2020",
        imagenPortada: "https://m.media-amazon.com/images/I/91Gf50qbGAL._UF894,1000_QL80_.jpg",
        linkSpotify: "https://open.spotify.com/album/2dfFViV7Dp3dI68wx6vZFr",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Heroes and Villains",
        fechaLanzamiento: "2 de diciembre de 2022",
        imagenPortada: "https://i.scdn.co/image/ab67616d0000b273c4fee55d7b51479627c31f89",
        linkSpotify: "https://open.spotify.com/album/3ySEb5eYvEugfcZ1KthhLw",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "Metro Boomin Presents Spider-Man: Across the Spider-Verse",
        fechaLanzamiento: "2 de junio de 2023",
        imagenPortada: "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
        linkSpotify: "https://open.spotify.com/album/3uXFfgGYlf2WBbUFLPwrc6",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    },
    {
        titulo: "We Don't Trust You",
        fechaLanzamiento: "22 de marzo de 2024",
        imagenPortada: "https://townsquare.media/site/812/files/2024/03/attachment-future-metro-boomin-we-dont-trust-you-photo.jpg?w=1080&q=75",
        linkSpotify: "https://open.spotify.com/album/2GZXk9Gz9kXmUIsTMy9Pj1",
        cancionMasEscuchada: "", // Añade la canción más escuchada si está disponible
        canciones: []
    }
];




//GSAP INTRO

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("DOMContentLoaded", function () {
      const contentHolderHeight =
        document.querySelector(".content-holder").offsetHeight;
      const imgHolderHeight = window.innerHeight;
      const additionalScrollHeight = window.innerHeight;

      const totalBodyHeight =
        contentHolderHeight + imgHolderHeight + additionalScrollHeight;
      document.body.style.height = `${totalBodyHeight}px`;
    });

    ScrollTrigger.create({
      trigger: ".website-content",
      start: "-0.1% top",
      end: "bottom bottom",
      onEnter: () => {
        gsap.set(".website-content", { position: "absolute", top: "195%" });
      },
      onLeaveBack: () => {
        gsap.set(".website-content", { position: "fixed", top: "0" });
      },
    });

    gsap.to(".header .letters:first-child", {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
        
      },
    });

    gsap.to(".header .letters:last-child", {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(".img-holder", {
      rotation: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });

    gsap.to(".img-holder img", {
      scale: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: `+=200%`,
        scrub: 1,
      },
    });



    //LOGICA ALBUMS


    const albumsContainer = document.getElementById('albums-container');

// Recorre el array de álbumes y crea elementos HTML para cada uno
albumsMetroBoomin.forEach(album => {
    const albumElement = document.createElement('div');
    albumElement.classList.add('album');

    const albumImage = document.createElement('img');
    albumImage.src = album.imagenPortada;
    albumImage.alt = album.titulo;

    const albumInfo = document.createElement('div');
    albumInfo.classList.add('album-info');

    const albumTitle = document.createElement('h2');
    albumTitle.textContent = album.titulo;

    const albumDate = document.createElement('p');
    albumDate.textContent = `Fecha de lanzamiento: ${album.fechaLanzamiento}`;


    albumInfo.appendChild(albumTitle);
    albumInfo.appendChild(albumDate);

    albumElement.appendChild(albumImage);
    albumElement.appendChild(albumInfo);

    albumsContainer.appendChild(albumElement);
});
