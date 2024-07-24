// Mentees data array
const mentees = [
	{
		name: "Fowora Oluwatobi Ayokunle",
		project:
			"An Improved Mobile Network Bandwidth Model Using Wi-Fi Offloading Technique",
		year: "2021/2022",
		qualification: "Masters",
	},
];

// Function to create carousel items
function createCarouselItems() {
	const carousel = document.getElementById("carousel");

	mentees.forEach((mentee) => {
		const item = document.createElement("div");
		item.classList.add("carousel-item");
		item.innerHTML = `
          <p class="font-bold">${mentee.name}</p>
          <p class="italic max-w-md">${mentee.project}</p>
          <p>${mentee.qualification}, ${mentee.year}</p>
      `;
		carousel.appendChild(item);
	});

	// Initialize carousel (optional, if using a carousel library)
	// For simplicity, assuming you have a carousel library or custom script to handle cycling
}

// Call function to create carousel items when page loads
document.addEventListener("DOMContentLoaded", function () {
	createCarouselItems();
});