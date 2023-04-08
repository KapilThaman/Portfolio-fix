import React, { useEffect, useRef } from 'react'

const ImageParticles = props => {
    const canvasRef = useRef(null);

    useEffect(()=>{

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'curry.png';

const rgbaArray = [];
const brightnessArray = [];
const particlesArray = [];


//4. Create Particle Class
class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.brightness = 0;
        this.velocity = Math.random() * 3 + 0.1;
        this.radius = Math.random() * 1.5 + 1;
    }

    update() {
        this.y += this.velocity; 
        if(this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }

        this.brightness = brightnessArray[Math.floor(this.y-1) * canvas.width + Math.floor(this.x)];
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = rgbaArray[Math.floor(this.y-1) * canvas.width + Math.floor(this.x)];
        ctx.fill();
    }


}

// 1. Load Image
img.onload = () => {
canvas.width = img.width;
canvas.height = img.height;
ctx.drawImage(img, 0, 0, );

// 2. Get Image Data
const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
const data = imageData.data;
ctx.clearRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < data.length; i ++) {
    const red = data[i * 4];
    const green = data[i * 4 + 1];
    const blue = data[i * 4 + 2];
    const alpha = data[i * 4 + 3];

    const brightness = (red + green + blue) / 3;
    brightnessArray.push(brightness);
    rgbaArray.push(`rgb(${red}, ${green}, ${blue})`);

}
console.log(brightnessArray);

//3. generate 10000 particles 
for (let i = 0; i < 10000; i++) {
particlesArray.push(new Particle());
}

//5. animate particles
const animate = () => {
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => {
        particle.update();
        ctx.globalAlpha = particle.brightness * 0.005;
        particle.draw();
    });
    requestAnimationFrame(animate);
}
animate();

};

    },[]);
    return <canvas ref={canvasRef} {...props} />
}

export default ImageParticles