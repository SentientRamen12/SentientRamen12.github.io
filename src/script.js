const experiences = [
    {
        company: "Wadhwani AI",
        role: "Tech Lead | SDE 3",
        startDate: "May 2023",
        endDate: "Aug 2024",
        details: `
        <h4>Merging Technology and Social Impact: My Journey at Wadhwani AI</h4>

        <p>When I joined Wadhwani AI, a non-profit dedicated to leveraging AI for social good, I saw an opportunity to align my passion for solving complex, scalable problems with meaningful impact. As a software developer, I've always been driven by challenges that push the boundaries of technology. But here, I found something more – a chance to use my skills to make a tangible difference in education across India's diverse linguistic landscape.</p>

        <p>Our mission was ambitious: to revolutionize how we assess and improve literacy in Indian public schools, particularly in areas with limited resources. This wasn't just about building another app; it was about creating an AI solution that could work effectively in low-bandwidth areas, be user-friendly for teachers with varying levels of tech literacy, scale across diverse deployment environments, and crucially, support multiple Indic languages beyond English and Hindi.</p>

        <h5>Key Impacts:</h5>
        <ul>
        <li>Led the development of an AI-based Oral Reading Fluency (ORF) solution that has assessed over 3 million students across multiple states, providing unprecedented insights into literacy levels in various Indic languages.</li>
        <li>Engineered a Kubernetes infrastructure with ASR ML pipelines that reduced processing latency by 80%, enabling real-time feedback even in challenging network conditions, while supporting multiple language models.</li>
        <li>Spearheaded a cloud migration from AWS to GCP, resulting in a 40% reduction in infrastructure costs, allowing us to allocate more resources to expanding our reach and supporting additional languages.</li>
        <li>Successfully implemented language-agnostic algorithms and interfaces, making the solution adaptable to various Indic languages, thus addressing India's linguistic diversity in education.</li>
        </ul>

        <h5>Recognitions:</h5>
        <ul>
        <li>Our multilingual work was recognized by the Bill and Melinda Gates Foundation, acknowledging its potential for global impact in education, especially in linguistically diverse regions.</li>
        <li>The ORF solution was identified as a major tool to be integrated into Vidya Samiksha Kendra (VSK) across multiple states in India. VSK is a pioneering data-driven initiative by the Ministry of Education, aimed at enhancing learning outcomes through real-time educational data analysis and improved school management.</li>
        </ul>

        <h5>Critical Learnings:</h5>
        <p>This journey has been as much about personal growth as it has been about technological advancement. I've gained invaluable insights into:</p>
        <ul>
        <li>Building scalable ML infrastructure that can handle millions of assessments across multiple languages while maintaining performance and reliability.</li>
        <li>Designing solutions for low-bandwidth areas and users with limited technical education, emphasizing intuitive interfaces and offline capabilities that work across different linguistic contexts.</li>
        <li>Creating highly interactive tools that engage both teachers and students, making the assessment process more of a learning experience than a test, while being culturally and linguistically sensitive.</li>
        <li>Developing flexible architectures that allow for easy integration across various platforms – from web apps to mobile devices to desktop applications – ensuring our solution can reach every classroom, regardless of their technological setup or primary language of instruction.</li>
        <li>Navigating the complexities of natural language processing and speech recognition for Indic languages, each with its unique phonetic and script characteristics.</li>
        </ul>

        <p>As I reflect on this experience, I'm struck by how technology, when applied thoughtfully, can be a powerful force for social good, especially in bridging linguistic divides. The recognition from the Gates Foundation and the integration into VSK underscore the far-reaching impact of our work. It's not just about the code we write or the systems we build; it's about contributing to a larger movement that's reshaping education at a national and potentially global scale, respecting and preserving linguistic diversity along the way.</p>

        <p>This role has reinforced my belief in the power of technology to solve real-world problems and has fueled my passion for creating solutions that truly matter. As we continue to expand and refine our tools, I'm excited about the potential to positively influence millions more learners and educators across India's rich tapestry of languages, bridging the gap between technological innovation and social progress.</p>
        `
    },
    {
        company: "Ula",
        role: "Founding Engineer | SDE 2",
        startDate: "Sept 2020",
        endDate: "May 2023",
        details: `
        <h3>Pioneering E-Commerce Evolution in Indonesia: My Ula Journey</h3>

        <p>In September 2020, I embarked on an exhilarating venture with Ula, a Sequoia-funded startup poised to revolutionize B2B e-commerce in Indonesia. As a Founding Engineer, I found myself at the intersection of technology and economic empowerment, tasked with building solutions that would reshape the landscape for countless small retailers across the archipelago.</p>

        <p>Our goal was to create a digital ecosystem that would level the playing field for small businesses, connecting them seamlessly with suppliers and opening up new avenues for growth. We endeavoured to build a new future for traditional commerce in one of Southeast Asia's most dynamic markets.</p>

        <h4>Key Contributions and Impacts:</h4>
        <ul>
        <li>Spearheaded the development of critical social commerce features, leading a team of three engineers. Our innovations extended the platform's reach to online retailers, enabling them to manage and fulfill end-customer orders efficiently.</li>
        <li>Orchestrated a significant overhaul of our core services - order management, catalog systems, inventory tracking, and logistics. This comprehensive upgrade, coupled with new product listing, discovery, and promotional capabilities, catapulted our app usage from a mere 10% to an impressive 80%, contributing a substantial 25% to the monthly Gross Merchandise Value (GMV).</li>
        <li>Tackled a critical optimization challenge in order data collation and report generation that was impeding key services. In collaboration with the Principal Developer, we engineered a robust data warehouse and pipeline solution using Golang, Kafka, BigQuery, and GraphQL. This innovation not only eliminated downtime issues but also slashed report generation time to mere seconds, ensuring smooth order creation and management flows.</li>
        </ul>

        <h4>Recognition and Growth:</h4>
        <ul>
        <li>Our relentless innovation and market impact attracted the attention of global investment giants. Beyond our initial Sequoia Capital backing, we secured funding from tech behemoth Tencent and Bezos Expeditions, catapulting Ula to a Series B valuation of US$600 million.</li>
        <li>This financial vote of confidence wasn't just about numbers; it was a testament to our vision and the tangible impact we were making in transforming Indonesia's retail landscape.</li>
        </ul>

        <h4>Personal Evolution and Insights:</h4>
        <p>My journey at Ula has been a crucible of growth, both professionally and personally:</p>
        <ul>
        <li>Mastered the art of building scalable solutions, honing my ability to make technical decisions that not only solve immediate challenges but also pave the way for future innovations.</li>
        <li>Developed a holistic problem-solving approach, learning to navigate complex challenges that span multiple domains and ecosystems. This required fostering collaborative relationships across teams and stakeholders, a skill that proved invaluable.</li>
        <li>Stepped into leadership, guiding an engineering team and mastering the delicate balance of managing expectations while driving innovation.</li>
        <li>Perhaps most critically, I cultivated a deep understanding of the symbiosis between technology, product, and business. This broader perspective allowed me to identify technological opportunities that aligned with our business goals and created tangible impact for our end users.</li>
        </ul>

        <p>Reflecting on my time at Ula, I'm struck by the profound impact technology can have when it's purposefully applied to real-world challenges. We weren't just building an e-commerce platform; we were constructing a bridge between traditional commerce and the digital future, empowering small businesses to thrive in an increasingly connected world.</p>
`
    },
];


function createTimeline() {
    const timeline = document.querySelector('.timeline');
    const timelineContent = document.querySelector('.timeline-content');

    // Create a container for timeline points
    const timelinePoints = document.createElement('div');
    timelinePoints.className = 'timeline-points';
    timeline.appendChild(timelinePoints);

    experiences.forEach((exp, index) => {
        // Create timeline point
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.style.top = `${(index / (experiences.length - 1)) * 100}%`;
        point.innerHTML = `<div class="timeline-date">${exp.startDate}</div>`;
        timelinePoints.appendChild(point);

        // Create experience details
        const details = document.createElement('div');
        details.className = 'experience-item';
        details.innerHTML = `
        <h3>${exp.company}</h3>
        <h4>${exp.role}</h4>
        <p>${exp.startDate} - ${exp.endDate}</p>
        ${exp.details}
      `;
        timelineContent.appendChild(details);
    });

    // Activate the first item by default
    document.querySelector('.timeline-point').classList.add('active');
    document.querySelector('.experience-item').classList.add('active');
}

function setupTimelineScroll() {
    const timelineContent = document.querySelector('.timeline-content');
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const experienceItems = document.querySelectorAll('.experience-item');
    let currentIndex = 0;
    let isScrolling = false;

    function updateActiveExperience(index) {
        if (index < 0) index = 0;
        if (index >= experiences.length) index = experiences.length - 1;

        timelinePoints.forEach((point, i) => {
            point.classList.toggle('active', i === index);
        });

        experienceItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.scrollTop = 0; // Reset scroll position
                }, 50);
            } else {
                item.classList.remove('active');
                item.style.opacity = 0;
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });

        currentIndex = index;
    }

    function handleWheel(event) {
        if (isScrolling) return;

        const activeItem = document.querySelector('.experience-item.active');
        const { scrollTop, scrollHeight, clientHeight } = activeItem;

        // Check if we're at the top or bottom of the active item's content
        if (scrollTop === 0 && event.deltaY < 0) {
            event.preventDefault();
            isScrolling = true;
            updateActiveExperience(currentIndex - 1);
            setTimeout(() => { isScrolling = false; }, 500);
        } else if (scrollTop + clientHeight >= scrollHeight - 1 && event.deltaY > 0) {
            event.preventDefault();
            isScrolling = true;
            updateActiveExperience(currentIndex + 1);
            setTimeout(() => { isScrolling = false; }, 500);
        }
    }

    timelineContent.addEventListener('wheel', handleWheel, { passive: false });

    // Touch events for mobile (similar logic can be applied here)
    let touchStartY;
    timelineContent.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    timelineContent.addEventListener('touchmove', (e) => {
        if (isScrolling) return;

        const touchEndY = e.touches[0].clientY;
        const activeItem = document.querySelector('.experience-item.active');
        const { scrollTop, scrollHeight, clientHeight } = activeItem;

        if (scrollTop === 0 && touchEndY > touchStartY) {
            e.preventDefault();
            isScrolling = true;
            updateActiveExperience(currentIndex - 1);
            setTimeout(() => { isScrolling = false; }, 500);
        } else if (scrollTop + clientHeight >= scrollHeight - 1 && touchEndY < touchStartY) {
            e.preventDefault();
            isScrolling = true;
            updateActiveExperience(currentIndex + 1);
            setTimeout(() => { isScrolling = false; }, 500);
        }
        touchStartY = touchEndY;
    });

    // Initialize the first experience as active
    updateActiveExperience(0);

    // Add click event listeners to timeline points
    timelinePoints.forEach((point, index) => {
        point.addEventListener('click', () => updateActiveExperience(index));
    });
}


document.addEventListener('DOMContentLoaded', () => {
    createTimeline();
    setupTimelineScroll();
});





document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navItems = document.querySelectorAll('nav ul li a');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    function showSection(sectionId) {
        const sections = document.getElementsByTagName('section');
        for (let section of sections) {
            section.style.display = 'none';
            section.classList.remove('active');
        }

        const selectedSection = document.getElementById(sectionId);
        if (sectionId === 'personal-info') {
            selectedSection.style.display = 'flex';
        } else {
            selectedSection.style.display = 'block';
        }

        // Trigger reflow
        selectedSection.offsetHeight;

        selectedSection.classList.add('active');

        for (let navItem of navItems) {
            navItem.classList.remove('active');
        }

        document.getElementById('nav-' + sectionId).classList.add('active');
    }

    for (let navItem of navItems) {
        navItem.addEventListener('click', function () {
            const sectionId = this.id.replace('nav-', '');
            showSection(sectionId);
        });
    }

    // Show the personal-info section by default
    showSection('personal-info');
});