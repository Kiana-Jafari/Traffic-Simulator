// Declare variables
const floorPos_y = 600;
let traffic;
let isMoving;
let trafficCount;

// Initialize variables
function setup()
{
    createCanvas(1200, 800);
    
    isMoving = false;
    trafficCount = 0;
    space = (width + 1000) / 10;

    traffic = [];
    for (let i = 0; i < 10; i++)
    {
        // Define the car object
        let car = {
            x: -500 + i * space,
            height: random(100, 250),
            length: random(100, space * 0.9),
            wheelDia: random(40, 80),
            color: color(random(0, 255), random(0, 255), random(0, 255))
        };

        // Push the cars to the array
        traffic.push(car);
    }
}

// Draw the Movement and Scenery
function draw()
{
    // Draw the ground and sky
    background(102,179,255);
    
    noStroke();
    fill(130);
    rect(0, floorPos_y, width, height - floorPos_y);

    // Stop each 300 seconds to make traffic
    if (trafficCount > 300)
    {
        isMoving = !isMoving;
        trafficCount = 0;
    }

    else
    {
        trafficCount += 1;
    }

    // Movement
    for (let i = 0; i < traffic.length; i++)
    {
        renderCar(traffic[i]);
        if (isMoving)
        {
            traffic[i].x += 2;
            if (traffic[i].x > width + 500)
            {
                traffic[i].x = -500;
            }
        }
    }
}

// Draw the cars
function renderCar(_car)
{
    fill(_car.color);
    stroke(0);
    
    // DDraw the car's body
    rect(
        _car.x, floorPos_y - _car.height
        , _car.length
        , _car.height - _car.wheelDia/2,
        20);
    
    // Draw the windscreen
    fill(0,255,255);
    rect(
        _car.x + _car.length * 0.7, 
        floorPos_y - _car.height * 0.8, 
        _car.length * 0.2, 
        _car.height * 0.3, 
        5);
    
    
    // Draw the wheels
    fill(65);
    ellipse(
        _car.x, 
        floorPos_y - _car.wheelDia/2, 
        _car.wheelDia
    );
    
    ellipse(
        _car.x + _car.length, 
        floorPos_y - _car.wheelDia/2, 
        _car.wheelDia);
}
