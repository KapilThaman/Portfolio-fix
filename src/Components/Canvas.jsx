import React, { useEffect, useRef } from 'react'

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(()=>{

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            let atoms = [];

            

              const animate = () => {
                atoms.forEach((atom,index)=>{
                    atom.draw();
                    atom.update();
                    atom.updateRadius();
            
                    if (atom.radius < 0.3){
                        atoms.splice(index, 1);
                    }
            
                });
                ctx.save();
                ctx.fillStyle = 'rgba(255,255,255,0.3)';
                ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.restore();
            
                requestAnimationFrame(animate);
            }

            animate();

 class Atom {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 8 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    updateRadius(){
         this.radius -= 0.1;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.radius,0,Math.PI * 2);
        ctx.fill();
    }
 }
 canvas.addEventListener('mousemove', (event) => {
    for (let i = 0; i < 50; i++) {
      atoms.push(new Atom(event.x, event.y));
    }
});

    },[]);
    return <canvas ref={canvasRef} {...props} />
}

export default Canvas