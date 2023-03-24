var canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext("2d");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("div2");
var section3 = document.getElementById("div3");
var section4 = document.getElementById("div4");

var colour = ["#4A507D", "#95A1FC", "#E1E4FD", "#6F717D", "#7780C9"];
document.body.style.backgroundImage =" url('b1.jpg')"; 
// document.body.style.width =window.innerWidth;
document.body.style.backgroundRepeat = "no-repeat";

var point = {
    x: undefined,
    y: undefined
}
addEventListener("mousemove", function (event) {
    point.x = event.x;
    point.y = event.y;

})

var x, y, dx, dy, radius, clr;

class Circle {
    constructor(x, y, dx, dy, radius, clr) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        clr = colour[Math.floor(Math.random() * 6)];

        this.draw = function () {
            c.beginPath();
            // c.drawImage(clr, this.x, this.y, this.radius, this.radius);
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            c.fillStyle = clr;
            c.fill()
            c.closePath();
        };
        this.move = function () {
            this.draw();
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < this.radius || this.x > window.innerWidth - this.radius) { this.dx = (-this.dx); }
            if (this.y < this.radius || this.y > window.innerHeight - this.radius) { this.dy = (-this.dy); }

            if (point.x - this.x <= 50 && point.x - this.x >= -50 && point.y - this.y <= 50 && point.y - this.y >= -50) {
                if (this.radius <= 25) { this.radius += 1; }
            }
            else if (this.radius >= 0.01) {

                { this.radius -= 1; }
            }
        };
    }
}
var circlearr = [];
for (var i = 0; i < 1000; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    radius = 2;
    dx = Math.random();
    dy = Math.random();
    circlearr[i] = new Circle(x, y, dx, dy, radius);
};
let t = 0;
function animate() {

    requestAnimationFrame(animate);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0; i < 1000; i++) {
        // circlearr[i].draw();

        circlearr[i].move();
    }
    t++;
    if(t<=500){section2.style.display = "none";section3.style.display = "none";section4.style.display = "none";}
    else{section2.style.display = "block";section3.style.display = "block";section4.style.display = "block";}
    if (t === 500) { section1.style.display = "none"; }
    // if (t === 600) { document.body.style.backgroundColor = "black"; }


}

animate()


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // entry.target.classList.remove("hidden");

        }
        else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

//dummy code
let ele=document.querySelector('canvas');
ele.addEventListener("mouseover" ,()=>{console.log('KI!'); })