document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector('body');

    function createFlower() {
        let flower = document.createElement('div');
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        flower.style.position = 'absolute';
        flower.style.left = x + "px";
        flower.style.top = y + "px";

        let size = Math.random() * 80;
        flower.style.width = 20 + size + "px";
        flower.style.height = 20 + size + "px";
       

        let rotation = Math.random() * 360;
        flower.style.transform = `rotate(${rotation}deg)`;

        body.appendChild(flower);

        setTimeout(function() {
            flower.remove();
        }, 3000);
    }

    setInterval(createFlower, 500); // Adjust the interval as needed
});
