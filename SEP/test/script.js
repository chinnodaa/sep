// // Get the club containers and the popup
// const clubs = document.querySelectorAll(".club");
// const popup = document.getElementById("popup");
// const closeButton = document.getElementById("closeButton");
// const popupTitle = document.getElementById("popupTitle");
// const popupDescription = document.getElementById("popupDescription");
// const registerButton = document.getElementById("registerButton");

// // Club details
// const clubDetails = {
//   club1: {
//     name: "Football Club",
//     description: "Join our football club and be part of a winning team! We train hard and play harder.",
//   },
//   club2: {
//     name: "Basketball Club",
//     description: "Welcome to our basketball club where we aim high and shoot for the stars. Come join us!",
//   },
//   club3: {
//     name: "Tennis Club",
//     description: "Love tennis? Join our club and serve, volley, and smash your way to success!",
//   },
//   club4: {
//     name: "Swimming Club",
//     description: "Dive into the world of swimming with our club. We provide top-notch training and facilities.",
//   }
// };

// // Function to open the popup
// function openPopup(clubId) {
//   const club = clubDetails[clubId];
//   popupTitle.textContent = club.name;
//   popupDescription.textContent = club.description;
//   popup.style.opacity = "1";
//   popup.style.visibility = "visible";
// }

// // Function to close the popup
// function closePopup() {
//   popup.style.opacity = "0";
//   popup.style.visibility = "hidden";
// }

// // Function to open registration form popup
// function openRegistrationForm() {
//   closePopup();
//   // Open registration form popup code goes here
//   const registrationFormPopup = document.getElementById("registrationFormPopup");
//   registrationFormPopup.style.opacity = "1";
//   registrationFormPopup.style.visibility = "visible";
// }

// // Event listeners for opening and closing the popup
// clubs.forEach(club => {
//   club.addEventListener("click", function() {
//     openPopup(club.id);
//   });
// });
// closeButton.addEventListener("click", closePopup);
// registerButton.addEventListener("click", openRegistrationForm);

// // Prevent propagation of click events from the popup to its parent elements
// popup.addEventListener("click", function(event) {
//   event.stopPropagation();
// });

// // Get the registration form popup and close button
// const registrationFormPopup = document.getElementById("registrationFormPopup");
// const registrationFormCloseButton = document.getElementById("registrationFormCloseButton");

// // Function to close the registration form popup
// function closeRegistrationFormPopup() {
//   registrationFormPopup.style.opacity = "0";
//   registrationFormPopup.style.visibility = "hidden";
// }

// // Event listener for the close button in the registration form popup
// registrationFormCloseButton.addEventListener("click", closeRegistrationFormPopup);


