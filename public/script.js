const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Text
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Canvas", 50, 50);

// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(50, 100, 100, 50);

// Triangle
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(250, 200);
ctx.lineTo(150, 200);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

// Circle
ctx.beginPath();
ctx.arc(350, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();

// Gradient
const gradient = ctx.createLinearGradient(0, 300, 500, 300);
gradient.addColorStop(0, "red");
gradient.addColorStop(1, "yellow");

ctx.fillStyle = gradient;
ctx.fillRect(50, 300, 400, 100);
