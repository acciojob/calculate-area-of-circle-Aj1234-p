 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
	         radius = parseInt(radius);
	        let area = 3.14159*radius*radius;
	        alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}
calculateArea();
