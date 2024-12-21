// Initialize the app when DOM content is fully loaded
const init = () => {
    const inputForm = document.querySelector("form");

    // Event listener for form submission
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the page from refreshing

        // Get the input value
        const input = document.querySelector("input#searchByID");

        // Fetch movie data based on the entered ID
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Movie not found");
                }
                return response.json();
            })
            .then((data) => {
                // Display the fetched movie details
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title;
                summary.innerText = data.summary;
            })
            .catch((error) => {
                // Handle errors and display a message
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = "Error";
                summary.innerText = error.message;
            });
    });
};

// Attach the initialization function to DOMContentLoaded event
document.addEventListener("DOMContentLoaded", init);
