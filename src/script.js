// filepath: FAST-FOOD/src/script.js

// Function to handle image popup
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("modalCaption");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;

    const span = document.getElementsByClassName("close-modal")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// Slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000);
}

function moveSlide(n) {
  const slides = document.getElementsByClassName("slide");
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}

// Form submission handling
function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const orderItems = document.getElementById("order-items").value;
    const note = document.getElementById("note").value;

    const orderDetails = `Họ tên: ${name}\nSố điện thoại: ${phone}\nĐịa chỉ: ${address}\nMón đã chọn: ${orderItems}\nGhi chú: ${note}`;

    // Send email using EmailJS or similar service
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        order_details: orderDetails
    })
    .then(function(response) {
        document.getElementById("order-success").style.display = "block";
        console.log("Email sent successfully!", response.status, response.text);
    }, function(error) {
        console.log("Failed to send email. Error: ", error);
    });

    // Reset form
    document.querySelector(".order-form").reset();
    return false; // Prevent default form submission
}

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  toggle.onclick = function() {
    nav.classList.toggle('open');
  };
  // Đóng menu khi click link
  nav.querySelectorAll('a').forEach(link => {
    link.onclick = () => nav.classList.remove('open');
  });
});