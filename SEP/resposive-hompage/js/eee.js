
// Get the club containers and the popup
const clubs = document.querySelectorAll(".box");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const registerButton = document.getElementById("registerButton");

// Club details
const clubDetails = {
  box1: {
    name: "Power Systems Club",
    description: "The Power Systems Club delves into the study of electrical power generation, transmission, and distribution systems. Members learn about power generation technologies, grid infrastructure, and renewable energy sources, and may engage in projects related to energy conservation and sustainability.!",
  },
  box2: {
    name: "Embedded Systems Club",
    description: "This club focuses on embedded systems design, encompassing microcontrollers, real-time operating systems, and firmware development. Members learn to program microcontroller platforms, interface with sensors and actuators, and develop embedded software for various applications, including IoT devices and control systems.!",
  },
//   box3: {
//     name: "Wireless Communication Club",
//     description: " This club explores wireless communication technologies such as RF communication, mobile networks, and satellite communication. Members gain insights into wireless protocols, antenna design, and signal processing techniques, preparing them for careers in telecommunications and networking.!",
//   },
//   box4: {
//     name: "Swimming Club",
//     description: "Dive into the world of swimming with our club. We provide top-notch training and facilities.",
//   }
};

// Function to open the popup
function openPopup(clubId) {
  const box = clubDetails[clubId];
  popupTitle.textContent = box.name;
  popupDescription.textContent = box.description;
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
}

// Function to close the popup
function closePopup() {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
}

// Function to open registration form popup
function openRegistrationForm() {
  closePopup();
  // Open registration form popup code goes here
  const registrationFormPopup = document.getElementById("registrationFormPopup");
  registrationFormPopup.style.opacity = "1";
  registrationFormPopup.style.visibility = "visible";
}

// Event listeners for opening and closing the popup
clubs.forEach(box => {
  box.addEventListener("click", function() {
    openPopup(box.id);
  });
});
closeButton.addEventListener("click", closePopup);
registerButton.addEventListener("click", openRegistrationForm);

// Prevent propagation of click events from the popup to its parent elements
popup.addEventListener("click", function(event) {
  event.stopPropagation();
});

// Get the registration form popup and close button
const registrationFormPopup = document.getElementById("registrationFormPopup");
const registrationFormCloseButton = document.getElementById("registrationFormCloseButton");

// Function to close the registration form popup
function closeRegistrationFormPopup() {
  registrationFormPopup.style.opacity = "0";
  registrationFormPopup.style.visibility = "hidden";
}

// Event listener for the close button in the registration form popup
registrationFormCloseButton.addEventListener("click", closeRegistrationFormPopup);
