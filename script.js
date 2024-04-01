const albumsMetroBoomin = [
  {
      title: "19 & Boomin",
      releaseDate: "June 19, 2014",
      coverImage: "https://images.genius.com/8a4fe393a9c3a1c2eca3e55eff0db85b.1000x1000x1.jpg",
      spotifyLink: "https://open.spotify.com/album/01hoD9mwYe3mH33y2g1Gkw?si=61eKc8IaRU2byMkSQIyYeQ",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Savage Mode",
      releaseDate: "July 15, 2016",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/6/6e/21_Savage_and_Metro_Boomin_-_Savage_Mode.png",
      spotifyLink: "https://open.spotify.com/intl-es/album/4I3EcXD4e3KcEoDJfFEZ5b?si=0ST_SYlVS96TsS90iZ77PQ",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Perfect Timing",
      releaseDate: "July 21, 2017",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/9/9f/PerfectTimingNavMetroBoomin.jpg",
      spotifyLink: "https://open.spotify.com/intl-es/album/6VFETcEfjilkAng073KLt9?si=civfFmukQlC0dLrNXWApIw",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Double or Nothing",
      releaseDate: "December 8, 2017",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/6/65/Big_Sean_and_Metro_Boomin_%E2%80%93_Double_or_Nothing.png",
      spotifyLink: "https://open.spotify.com/intl-es/album/0llyIxX3nDC3hobbGibVZl?si=-nZa3P2QST2eNcsGOZ0iMQ",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Without Warning",
      releaseDate: "October 31, 2017",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/d/de/21_Savage%2C_Offset_%26_Metro_Boomin_-_Without_Warning.png",
      spotifyLink: "https://open.spotify.com/intl-es/album/0MV1yCXcNNQBfwApqAVkH0?si=EI4KcMCNRo2RXrmzT-V-sQ",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Not All Heroes Wear Capes",
      releaseDate: "November 2, 2018",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/2/28/Metro_Boomin_%E2%80%93_Not_All_Heroes_Wear_Capes.png",
      spotifyLink: "https://open.spotify.com/intl-es/album/3IO8IPjwXuzPJnoaqkwYrj?si=vT5kMn17QaKYTJq99l-IVQ",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Savage Mode II",
      releaseDate: "October 2, 2020",
      coverImage: "https://m.media-amazon.com/images/I/91Gf50qbGAL._UF894,1000_QL80_.jpg",
      spotifyLink: "https://open.spotify.com/intl-es/album/6wTyGUWGCilBFZ837k5aRi?si=KFdiFNOYT0qWVUVUKEeC-w",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Heroes and Villains",
      releaseDate: "December 2, 2022",
      coverImage: "https://i.scdn.co/image/ab67616d0000b273c4fee55d7b51479627c31f89",
      spotifyLink: "https://open.spotify.com/intl-es/album/7txGsnDSqVMoRl6RQ9XyZP?si=EUoRZWvOSmSNEJTmethDcA",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "Metro Boomin Presents Spider-Man: Across the Spider-Verse",
      releaseDate: "June 2, 2023",
      coverImage: "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
      spotifyLink: "https://open.spotify.com/intl-es/album/1bwbZJ6khPJyVpOaqgKsoZ?si=sTBZR07jQUOYGIwsPImyWg",
      topSong: "", // Add top song if available
      songs: []
  },
  {
      title: "We Don't Trust You",
      releaseDate: "March 22, 2024",
      coverImage: "https://townsquare.media/site/812/files/2024/03/attachment-future-metro-boomin-we-dont-trust-you-photo.jpg?w=1080&q=75",
      spotifyLink: "https://open.spotify.com/intl-es/album/4iqbFIdGOTzXeDtt9owjQn?si=EsOGlJjORniegvTA_irYQw",
      topSong: "", // Add top song if available
      songs: []
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



  //ALBUMS LOGIC


  const albumsContainer = document.getElementById('albums-container');

// Loop through the albums array and create HTML elements for each one
albumsMetroBoomin.forEach(album => {
  const albumElement = document.createElement('div'); // Cambiado de 'a' a 'div'
  albumElement.classList.add('album');
  albumElement.style.cursor = 'pointer'; // Cambiar el cursor para indicar que es un elemento interactivo
  albumElement.onclick = () => {
    window.open(album.spotifyLink, '_blank'); // Abrir enlace de Spotify en una nueva pestaña al hacer clic en la tarjeta
  };

  const albumImage = document.createElement('img');
  albumImage.src = album.coverImage;
  albumImage.alt = album.title;

  const albumInfo = document.createElement('div');
  albumInfo.classList.add('album-info');

  const albumTitle = document.createElement('h2');
  albumTitle.textContent = album.title;

  const albumDate = document.createElement('p');
  albumDate.innerHTML += `Release Date: <br> ${album.releaseDate}`;

  albumInfo.appendChild(albumTitle);
  albumInfo.appendChild(albumDate);

  albumElement.appendChild(albumImage);
  albumElement.appendChild(albumInfo);

  albumsContainer.appendChild(albumElement);
});
