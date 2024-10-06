const images = [
    '/assets/img/maps/1.jpeg',
    '/assets/img/maps/2.jpeg',
    '/assets/img/maps/3.jpeg',
    '/assets/img/maps/4.jpeg',
    '/assets/img/maps/5.jpeg',
    '/assets/img/maps/6.jpeg',
    '/assets/img/maps/7.jpeg',
    '/assets/img/maps/8.jpeg',
    '/assets/img/maps/9.jpeg',
    '/assets/img/maps/10.jpeg',
];  

console.log(images)
  
document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("generateSoilAnalysis").onclick = () => {
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];
          document.getElementById("map").src = randomImage;
    };
});
