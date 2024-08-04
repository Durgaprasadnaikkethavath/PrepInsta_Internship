//checking time and date of available
function BookingAppointment() {
  const patientName = document.getElementById("patientName").value;
  const doctorName = document.getElementById("doctorName").value;
  const appointmentTime = document.getElementById("appointmentTime").value;
  const currentTime = new Date().toISOString();

  if (new Date(appointmentTime) < new Date(currentTime)) {
    alert("Cannot select a past date and time.");
    return;
  }

  if (patientName && doctorName && appointmentTime) {
    const appointmentList = document.getElementById("appointmentList");
    const appointmentItem = document.createElement("div");
    appointmentItem.textContent = `Patient Name: ${patientName}, Doctor Name: ${doctorName}, Appointment Time: ${appointmentTime}`;
    appointmentList.appendChild(appointmentItem);
    alert(`Appointment booked successfully!`);
  } else {
    alert("Please fill in all fields.");
  }
}

// pricing section

document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("month");
  const button2 = document.getElementById("year");
  const monthContents = document.querySelectorAll("#monthly");
  const yearContents = document.querySelectorAll("#yearly");
  const contentContainer = document.querySelector(".monthlyPlans");

  // Add 'default' class to the first month content to display it by default
  monthContents[0].classList.add("default");

  button1.addEventListener("click", function () {
    // Hide all year content
    yearContents.forEach((content) => (content.style.display = "none"));
    // Show all month content
    monthContents.forEach((content) => (content.style.display = "flex"));
  });

  button2.addEventListener("click", function () {
    // Hide all month content
    monthContents.forEach((content) => (content.style.display = "none"));
    // Show all year content
    yearContents.forEach((content) => (content.style.display = "flex"));
  });

  // Initially display month content in flex layout
  contentContainer.style.display = "flex";
  contentContainer.style.flexDirection = "row";
  contentContainer.style.flexWrap = "wrap";

  // function changeColor(button2) {
  //   button.style.backgroundColor = "green";
  // }
});
let previousButton = null;

function changeColor(button) {
  if (previousButton) {
    previousButton.style.backgroundColor = "#008cff";
  }

  button.style.backgroundColor = "#04355d";
  previousButton = button;
}

function changeColorButton(button) {
  if (previousButton) {
    previousButton.style.backgroundColor = "#d0ebff";
    previousButton.style.color = "#008cff";
  }

  button.style.backgroundColor = "#04355d";
  button.style.color = "white";
  previousButton = button;
}

const getStart = document.getElementById("getStart");
const getStart1 = document.getElementById("getStart_1");
const getStart2 = document.getElementById("getStart_2");
const getStart3 = document.getElementById("getStart_3");
const getStart4 = document.getElementById("getStart_4");
const getStart5 = document.getElementById("getStart_5");

getStart.addEventListener("click", function () {
  alert("This time monthly basic plan are not available");
});

getStart1.addEventListener("click", function () {
  alert("This time monthly standard plan are not available");
});
getStart2.addEventListener("click", function () {
  alert("This time monthly Premium Plan  are not available");
});

getStart3.addEventListener("click", function () {
  alert("This time yearly basic plan are not available");
});

getStart4.addEventListener("click", function () {
  alert("This time yearly standard plan are not available");
});
getStart5.addEventListener("click", function () {
  alert("This time yearly Premium Plan  are not available");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    // var content = document.getElementById("content");
    preloader.style.display = "none";
    // content.style.display = "block";
  });
});
