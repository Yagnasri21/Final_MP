document.addEventListener('DOMContentLoaded', () => {
    fetchCourses();

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to your backend
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message!');
        contactForm.reset();
    });
});

function fetchCourses() {
    // Simulating fetching data from a database
    const courses = [
        { id: 1, name: 'Computer Science' },
        { id: 2, name: 'Business Administration' },
        { id: 3, name: 'Mechanical Engineering' }
    ];

    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.textContent = course.name;
        courseList.appendChild(courseItem);
    });
}