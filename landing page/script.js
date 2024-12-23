// 1. Enroll Now button dynamic interaction
const enrollButtons = document.querySelectorAll('.enroll-button');
enrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const courseTitle = button.previousElementSibling.previousElementSibling.textContent;
        alert(`You have successfully enrolled in the course: ${courseTitle}`);
    });
});
function filterCourses(category) {
    var courses = document.querySelectorAll('.course');
    courses.forEach(function(course) {
        if (course.classList.contains(category)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}// 2. Search Bar Filtering
function filterCourses() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const courseList = document.querySelectorAll('.course');

    courseList.forEach(course => {
        const title = course.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    });
}

// 3. Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Show/Hide the Back to Top Button on Scroll
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the Top of the Page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4. Modal for Course Details
const courseModal = document.getElementById('courseModal');
const closeModal = document.querySelector('.close');

// Function to open course details in a modal
function showCourseDetails(courseTitle, courseDescription) {
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.innerHTML = `<strong>${courseTitle}</strong><br><br>${courseDescription}`;
    courseModal.style.display = 'block';
}

// Close the Modal
closeModal.onclick = function() {
    courseModal.style.display = 'none';
}

// Close Modal if Clicked Outside the Modal Content
window.onclick = function(event) {
    if (event.target === courseModal) {
        courseModal.style.display = 'none';
    }
}

// 5. Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter form');
const successMessage = document.getElementById('successMessage');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    successMessage.style.display = 'block'; // Show the success message
    setTimeout(() => {
        successMessage.style.display = 'none'; // Hide it after 3 seconds
    }, 3000);
});

// 6. Sticky Navigation
window.addEventListener('scroll', function() {
    const nav = document.getElementById('stickyNav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
