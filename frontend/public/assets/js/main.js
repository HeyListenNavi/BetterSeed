const images = [
    'assets/img/maps/1.jpeg',
    'assets/img/maps/2.jpeg',
    'assets/img/maps/3.jpeg',
    'assets/img/maps/4.jpeg',
    'assets/img/maps/5.jpeg',
    'assets/img/maps/6.jpeg',
    'assets/img/maps/7.jpeg',
    'assets/img/maps/8.jpeg',
];  

const icons = [
    '📈',
    '📉',
]

console.log(images)
  
document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("generateSoilAnalysis").onclick = () => {
          let randomIndex = Math.floor(Math.random() * images.length);
          const randomImage = images[randomIndex];
          document.getElementById("map").src = randomImage;

        randomIndex = Math.floor(Math.random() * icons.length);
        document.getElementById("precipitation").innerText = `${icons[randomIndex]} Precipitation`

        randomIndex = Math.floor(Math.random() * icons.length);
        document.getElementById("vegetation").innerText = `${icons[randomIndex]} Vegetation`
        
        randomIndex = Math.floor(Math.random() * icons.length);
        document.getElementById("temperature").innerText = `${icons[randomIndex]} Temperature`

        randomIndex = Math.floor(Math.random() * icons.length);
        document.getElementById("ground-humidity").innerText = `${icons[randomIndex]} Ground humidity`

        randomIndex = Math.floor(Math.random() * icons.length);
        document.getElementById("air-humidity").innerText = `${icons[randomIndex]} Hair humidity`
    };
});
