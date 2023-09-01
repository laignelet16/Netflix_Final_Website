// window alert

// create constant variable that has most of the endpoints http://localhost:8008/ 
	const i = 0; 
    // Function to generate a UUID (Universally Unique Identifier)
    function generateUUID() {
        i++;
        return i.toSting();
    }

    document.addEventListener("DOMContentLoaded", function () {
        const submitButton = document.getElementById("submit");

        submitButton.addEventListener("click", function () {
            // Get form input values
            const size = document.getElementById("size").value;
            const color = document.getElementById("color").value;
            const description = document.getElementById("t_shirt_description").value;
            const price = parseFloat(document.getElementById("t_shirt_price").value);
            const quantity = parseInt(document.getElementById("t_shirt_quantity").value);

            // Generate a unique ID
            const uniqueID = generateUUID();

            // Create a t-shirt object
            const tShirtData = {
                id: uniqueID, // Include the unique ID
                size: size,
                color: color,
                description: description,
                price: price,
                quantity: quantity
            };

            // Send a POST request to the "/tshirts" endpoint
            fetch("/tshirts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tShirtData)
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response here (e.g., show a success message or redirect to cart page)
               alert("T-shirt created successfully!");
               console.log(data);
            })
            .catch(error => {
                // Handle errors (e.g., show an error message)
                console.error("Error:", error);
            });
        });
    });
