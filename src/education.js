const educationData = [
    {
        school: "New York University",
        degree: "M.S. in Computer Science",
        startDate: "Sep 2022",
        endDate: "May 2024",
        details: `
        <h4>Master's Studies at NYU</h4>
        <p>Pursuing advanced studies in Computer Science, focusing on:</p>
        <ul>
            <li>Machine Learning and Artificial Intelligence</li>
            <li>Distributed Systems</li>
            <li>Advanced Algorithms</li>
        </ul>
        <h5>Key Projects:</h5>
        <ul>
            <li>Developed a distributed machine learning system for real-time data processing</li>
            <li>Implemented a novel algorithm for optimizing large-scale graph computations</li>
        </ul>
        `
    },
    {
        school: "Delhi Technological University",
        degree: "B.Tech in Computer Engineering",
        startDate: "Aug 2015",
        endDate: "May 2019",
        details: `
        <h4>Undergraduate Studies at DTU</h4>
        <p>Completed a comprehensive program in Computer Engineering with a minor in Machine Learning and Distributed Systems.</p>
        <h5>Achievements:</h5>
        <ul>
            <li>Graduated with First Class Honors</li>
            <li>Led the university's Artificial Intelligence Society</li>
            <li>Completed a thesis on "Optimizing Neural Networks for Edge Devices"</li>
        </ul>
        <h5>Relevant Coursework:</h5>
        <ul>
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
            <li>Database Management Systems</li>
            <li>Computer Networks</li>
            <li>Machine Learning</li>
        </ul>
        `
    }
];

function createEducationTimeline() {
    const timelineButtons = document.querySelector('#education .timeline-buttons');
    const timelineContent = document.querySelector('#education .timeline-content');

    educationData.forEach((edu, index) => {
        // Create timeline button
        const button = document.createElement('button');
        button.className = 'timeline-button';
        button.textContent = edu.school;
        button.addEventListener('click', () => updateActiveEducation(index));
        timelineButtons.appendChild(button);

        // Create education details
        const details = document.createElement('div');
        details.className = 'education-item';
        details.innerHTML = `
            <h3>${edu.school}</h3>
            <h4>${edu.degree}</h4>
            <p class="education-date">${edu.startDate} - ${edu.endDate}</p>
            <div class="education-details">${edu.details}</div>
        `;
        timelineContent.appendChild(details);
    });

    // Activate the first item by default
    updateActiveEducation(0);
}

function updateActiveEducation(index) {
    const buttons = document.querySelectorAll('#education .timeline-button');
    const educationItems = document.querySelectorAll('.education-item');

    buttons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

    educationItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = 1;
            }, 50);
        } else {
            item.classList.remove('active');
            item.style.opacity = 0;
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}