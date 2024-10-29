<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Select all buttons with the class 'skill-button'
        const buttons = document.querySelectorAll('.skill-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Get the next sibling element (the skill details)
                const details = this.nextElementSibling;

                // Toggle the display and opacity for a fade effect
                if (details.style.display === "block") {
                    details.style.display = "none"; // Hide details
                    details.classList.remove('show'); // Remove the show class
                } else {
                    details.style.display = "block"; // Show details
                    details.classList.add('show'); // Add the show class for the fade effect
                    details.style.opacity = "1"; // Set opacity to 1 for fade-in effect
                }
            })
        });
    });
</script>
