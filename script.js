document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  /* ======================
     DATA
  ====================== */

  const skills = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Frontend Development",
      level: 86,
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Website Animation", "UI Components", "Landing Pages"]
    },
    {
      icon: "fa-solid fa-code",
      title: "Programming",
      level: 78,
      tags: ["Python", "C++", "Java", "PHP", "Problem Solving", "OOP"]
    },
    {
      icon: "fa-solid fa-database",
      title: "Database & Backend",
      level: 84,
      tags: ["SQL", "Oracle", "Oracle APEX", "MySQL", "PL/SQL", "ERD", "EERD", "CRUD"]
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Data, AI & Analytics",
      level: 76,
      tags: ["RStudio", "Machine Learning", "Data Analytics", "Tableau", "Prompt Engineering"]
    },
    {
      icon: "fa-solid fa-palette",
      title: "Creative & Design",
      level: 74,
      tags: ["Canva", "Logo Design", "Social Media Design", "UI/UX", "Video Editing"]
    },
    {
      icon: "fa-solid fa-user-graduate",
      title: "Academic Project Work",
      level: 82,
      tags: ["Reports", "Presentations", "Documentation", "Viva Preparation"]
    }
  ];

  const projects = [
    {
      title: "GitHub Profile Repository",
      repo: "rohit56500",
      category: "portfolio",
      icon: "fa-brands fa-github",
      badge: "Profile",
      desc: "A GitHub profile configuration repository used to customize and present my GitHub identity professionally.",
      tech: ["GitHub Config"],
      link: "https://github.com/rohit56500/rohit56500"
    },
    {
      title: "Crime Management System",
      repo: "Crime-mangment-system",
      category: "database",
      icon: "fa-solid fa-shield-halved",
      badge: "PL/SQL",
      desc: "A PL/SQL and Oracle-based crime management database project designed to manage crime records, officers, investigations, evidence, and case information.",
      tech: ["PL/SQL", "Oracle", "Database"],
      link: "https://github.com/rohit56500/Crime-mangment-system"
    },
    {
      title: "Online Book Store Database",
      repo: "Onlinebook-Store",
      category: "database",
      icon: "fa-solid fa-book-open",
      badge: "Oracle SQL",
      desc: "A simple Oracle SQL bookstore database project with tables for books, customers, orders, sample data, and useful SQL operations.",
      tech: ["Oracle SQL", "Database Design", "Queries"],
      link: "https://github.com/rohit56500/Onlinebook-Store"
    },
    {
      title: "Inventory Management SQL",
      repo: "inventory-management-sql",
      category: "database",
      icon: "fa-solid fa-boxes-stacked",
      badge: "SQL",
      desc: "A beginner-friendly inventory management system using SQL schema, insert statements, and practical stock management queries.",
      tech: ["SQL", "Inventory", "Database"],
      link: "https://github.com/rohit56500/inventory-management-sql"
    },
    {
      title: "Store Responsive Website",
      repo: "Store-responsive-website",
      category: "web",
      icon: "fa-solid fa-store",
      badge: "Responsive",
      desc: "A responsive store website focused on clean product presentation, modern layout structure, and mobile-friendly frontend design.",
      tech: ["HTML", "CSS", "Responsive"],
      link: "https://github.com/rohit56500/Store-responsive-website"
    },
    {
      title: "Cafe Website",
      repo: "Cafe-Website",
      category: "web",
      icon: "fa-solid fa-mug-hot",
      badge: "Frontend",
      desc: "A visually appealing and responsive cafe website created to present menu items, brand identity, services, and contact information.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/rohit56500/Cafe-Website"
    },
    {
      title: "Personal Portfolio",
      repo: "Personal-Portfolio",
      category: "portfolio web",
      icon: "fa-solid fa-user",
      badge: "Portfolio",
      desc: "A personal portfolio website created to showcase my education, skills, projects, certificates, services, and contact details.",
      tech: ["HTML", "CSS", "Portfolio"],
      link: "https://github.com/rohit56500/Personal-Portfolio"
    },
    {
      title: "Chatbot System",
      repo: "chatbot-system",
      category: "ai",
      icon: "fa-solid fa-robot",
      badge: "Notebook",
      desc: "A Jupyter Notebook-based chatbot project exploring conversational logic, AI interaction flow, and basic chatbot development concepts.",
      tech: ["Jupyter Notebook", "AI", "Chatbot"],
      link: "https://github.com/rohit56500/chatbot-system"
    },
    {
      title: "Python Weekly Program",
      repo: "Python-Weekly-Progarm",
      category: "python ai",
      icon: "fa-brands fa-python",
      badge: "Python",
      desc: "A collection of Python weekly practice programs and notebook exercises developed to strengthen programming logic and Python fundamentals.",
      tech: ["Python", "Notebook", "Practice"],
      link: "https://github.com/rohit56500/Python-Weekly-Progarm"
    },
    {
      title: "Consultancy Website",
      repo: "Consultancy-website-",
      category: "web",
      icon: "fa-solid fa-building",
      badge: "Business",
      desc: "A professional consultancy website interface designed for presenting business services, company information, and contact sections.",
      tech: ["HTML", "CSS", "Business Website"],
      link: "https://github.com/rohit56500/Consultancy-website-"
    },
    {
      title: "Student Profile Management System",
      repo: "Student-profile-management-system",
      category: "python",
      icon: "fa-brands fa-python",
      badge: "CRUD",
      desc: "A Python-based system for managing student records, including adding, updating, deleting, and searching student details.",
      tech: ["Python", "CRUD", "Student Records"],
      link: "https://github.com/rohit56500/Student-profile-management-system"
    },
    {
      title: "Invoices System",
      repo: "Invoices-system",
      category: "cpp",
      icon: "fa-solid fa-file-invoice-dollar",
      badge: "C++",
      desc: "A small business invoice management system built using C++ for creating, calculating, and managing invoice records.",
      tech: ["C++", "Invoice System", "Management"],
      link: "https://github.com/rohit56500/Invoices-system"
    },
    {
      title: "Dynamic Website",
      repo: "Dynamic-Website",
      category: "web",
      icon: "fa-solid fa-globe",
      badge: "Website",
      desc: "A frontend website project developed using structured pages, styling, and interactive layout sections.",
      tech: ["HTML", "CSS", "Website Design"],
      link: "https://github.com/rohit56500/Dynamic-Website"
    }
  ];

  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle University",
      date: "September 30, 2025",
      meta: "Valid until September 30, 2027 · ID: 102769457OCI25DSOCP",
      category: "oracle analytics ai",
      icon: "fa-solid fa-award",
      desc: "Recognizes professional-level knowledge in Oracle Cloud Infrastructure data science concepts, cloud-based analytics, and data science workflows.",
      file: "assets/certificates/oracle-data-science-professional.pdf"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "October 03, 2025",
      meta: "Credential ID: 102769457OCI25AICFA",
      category: "oracle ai",
      icon: "fa-solid fa-certificate",
      desc: "Demonstrates foundational understanding of artificial intelligence, machine learning concepts, generative AI, and Oracle Cloud AI services.",
      file: "assets/certificates/oracle-ai-foundations.pdf"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte / Forage",
      date: "October 3rd, 2025",
      meta: "Data Analysis · Forensic Technology",
      category: "analytics simulation",
      icon: "fa-solid fa-briefcase",
      desc: "Completed practical tasks involving data analysis and forensic technology through a professional job simulation experience.",
      file: "assets/certificates/deloitte-data-analytics.pdf"
    },
    {
      title: "Data Science Job Simulation",
      issuer: "Forage",
      date: "October 3rd, 2025",
      meta: "Heathrow lounge eligibility · Customer buying behaviour",
      category: "analytics ai simulation",
      icon: "fa-solid fa-chart-simple",
      desc: "Completed practical data science simulation tasks focused on predictive modeling and customer behaviour analysis.",
      file: "assets/certificates/data-science-job-simulation.pdf"
    },
    {
      title: "Fundamentals of Data Analytics",
      issuer: "Certificate of Completion",
      date: "July 9, 2025",
      meta: "Duration: 27 minutes",
      category: "analytics",
      icon: "fa-solid fa-chart-pie",
      desc: "Completed a foundational course introducing core data analytics concepts and practical analytical thinking.",
      file: "assets/certificates/fundamentals-data-analytics.pdf"
    },
    {
      title: "SQL Tables - SQL Server 2014",
      issuer: "Certificate of Completion",
      date: "July 9, 2025",
      meta: "Duration: 1 hour",
      category: "sql database",
      icon: "fa-solid fa-table",
      desc: "Completed training on SQL tables and SQL Server 2014 fundamentals.",
      file: "assets/certificates/sql-tables.pdf"
    },
    {
      title: "Basics of Python",
      issuer: "Infosys Springboard / Digital Academy",
      date: "July 9, 2025",
      meta: "Python fundamentals",
      category: "python",
      icon: "fa-brands fa-python",
      desc: "Completed a Python fundamentals course covering basic programming concepts and beginner-level Python knowledge.",
      file: "assets/certificates/infosys-basics-python.pdf"
    },
    {
      title: "Python Classes & Inheritance",
      issuer: "Certificate of Completion",
      date: "July 9, 2025",
      meta: "Duration: 1 hour 9 minutes",
      category: "python",
      icon: "fa-solid fa-code-branch",
      desc: "Completed object-oriented programming training focused on Python classes and inheritance.",
      file: "assets/certificates/python-classes-inheritance.pdf"
    },
    {
      title: "Prompt Engineering",
      issuer: "Infosys Springboard / Digital Academy",
      date: "July 10, 2025",
      meta: "Generative AI workflow",
      category: "ai",
      icon: "fa-solid fa-wand-magic-sparkles",
      desc: "Completed prompt engineering training focused on designing effective prompts for AI tools and generative AI workflows.",
      file: "assets/certificates/infosys-prompt-engineering.pdf"
    }
  ];

  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Frontend Website Development",
      desc: "I build clean, responsive, and modern websites using HTML, CSS, and JavaScript with smooth animation and professional layouts.",
      tags: ["HTML", "CSS", "JavaScript"],
      level: "Most Requested"
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Responsive Website Design",
      desc: "I create websites that work perfectly on mobile, tablet, and desktop with flexible grids, adaptive sections, and modern UI behavior.",
      tags: ["Mobile First", "Responsive", "UX"],
      level: "Professional"
    },
    {
      icon: "fa-solid fa-user-tie",
      title: "Portfolio Website Design",
      desc: "I design premium portfolio websites for students, developers, freelancers, and job seekers to showcase skills, projects, and certificates.",
      tags: ["Portfolio", "Personal Brand", "Career"],
      level: "Featured"
    },
    {
      icon: "fa-solid fa-database",
      title: "Database Design",
      desc: "I support database design using ERD, EERD, normalization, table structure, relationships, keys, and clean SQL schema planning.",
      tags: ["SQL", "Oracle", "ERD"],
      level: "Academic + Practical"
    },
    {
      icon: "fa-solid fa-terminal",
      title: "SQL Query Writing",
      desc: "I write SQL queries for joins, subqueries, aggregation, CRUD operations, reports, dashboards, and database coursework requirements.",
      tags: ["Joins", "Subqueries", "Reports"],
      level: "Database Focus"
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Oracle APEX Support",
      desc: "I help create Oracle APEX pages, interactive reports, dashboards, forms, master-detail pages, and database-driven applications.",
      tags: ["Oracle APEX", "Dashboard", "Forms"],
      level: "University Projects"
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "UI/UX Design",
      desc: "I create clean user interface layouts with strong visual hierarchy, readable spacing, consistent colors, and user-friendly structure.",
      tags: ["UI Design", "UX", "Wireframe"],
      level: "Creative"
    },
    {
      icon: "fa-solid fa-palette",
      title: "Logo & Brand Design",
      desc: "I design simple, modern, and meaningful logo concepts for personal brands, websites, small businesses, and student projects.",
      tags: ["Logo", "Branding", "Canva"],
      level: "Creative Design"
    },
    {
      icon: "fa-solid fa-photo-film",
      title: "Social Media Post Design",
      desc: "I create attractive posters, banners, Instagram posts, thumbnails, and promotional graphics using creative design tools.",
      tags: ["Poster", "Banner", "Social Media"],
      level: "Visual Content"
    },
    {
      icon: "fa-solid fa-video",
      title: "Basic Video Editing",
      desc: "I edit simple videos for presentations, reels, social media, portfolio content, and promotional materials with clean transitions.",
      tags: ["Reels", "Editing", "Promo"],
      level: "Media"
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Data Analytics Support",
      desc: "I support basic data analysis, dashboard explanation, chart interpretation, RStudio coursework, and data visualization tasks.",
      tags: ["RStudio", "Charts", "Analytics"],
      level: "Data Focus"
    },
    {
      icon: "fa-solid fa-book-open-reader",
      title: "Student Project Documentation",
      desc: "I help structure project reports, presentations, viva preparation, explanation notes, and academic-style documentation.",
      tags: ["Report", "Presentation", "Viva"],
      level: "Academic Support"
    }
  ];

  /* ======================
     RENDER SKILLS
  ====================== */

  const skillsGrid = document.getElementById("skillsGrid");

  if (skillsGrid) {
    skillsGrid.innerHTML = skills.map(skill => `
      <article class="skill-card premium-card reveal tilt-card">
        <div class="skill-head">
          <div class="card-icon"><i class="${skill.icon}"></i></div>
          <h3>${skill.title}</h3>
        </div>

        <div class="progress" aria-label="${skill.level}%">
          <span style="--value:${skill.level}%"></span>
        </div>

        <div class="tags">
          ${skill.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </article>
    `).join("");
  }

  /* ======================
     RENDER PROJECTS
  ====================== */

  const projectsGrid = document.getElementById("projectsGrid");

  function renderProjects(list) {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = list.map(project => `
      <article class="project-card premium-card reveal tilt-card"
        data-category="${project.category}"
        data-search="${(project.title + " " + project.repo + " " + project.desc + " " + project.tech.join(" ")).toLowerCase()}">

        <div class="project-top">
          <div class="card-icon"><i class="${project.icon}"></i></div>
          <span class="badge">${project.badge}</span>
        </div>

        <h3>${project.title}</h3>
        <p>${project.desc}</p>

        <div class="tags">
          ${project.tech.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <div class="card-actions">
          <a class="mini-btn" href="${project.link}" target="_blank">
            <i class="fa-brands fa-github"></i> GitHub
          </a>
          <a class="mini-btn" href="${project.link}" target="_blank">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> View Project
          </a>
        </div>
      </article>
    `).join("");

    revealOnScroll();
    attachTilt();
  }

  renderProjects(projects);

  /* ======================
     RENDER CERTIFICATES
  ====================== */

  const certificatesGrid = document.getElementById("certificatesGrid");

  function renderCertificates(filter = "all") {
    if (!certificatesGrid) return;

    const list = certificates.filter(cert => filter === "all" || cert.category.includes(filter));

    certificatesGrid.innerHTML = list.map(cert => `
      <article class="cert-card premium-card reveal tilt-card" data-category="${cert.category}">
        <div class="cert-top">
          <div class="card-icon"><i class="${cert.icon}"></i></div>
          <span class="badge">${cert.issuer}</span>
        </div>

        <h3>${cert.title}</h3>

        <div class="cert-meta">
          <span><i class="fa-solid fa-calendar"></i> ${cert.date}</span>
          <span><i class="fa-solid fa-circle-info"></i> ${cert.meta}</span>
        </div>

        <p>${cert.desc}</p>

        <div class="card-actions">
          <a class="mini-btn" href="${cert.file}" target="_blank">
            <i class="fa-solid fa-eye"></i> View Certificate
          </a>
        </div>
      </article>
    `).join("");

    revealOnScroll();
    attachTilt();
  }

  renderCertificates();

  /* ======================
     RENDER ADVANCED SERVICES
  ====================== */

  const servicesGrid = document.getElementById("servicesGrid");

  if (servicesGrid) {
    servicesGrid.innerHTML = services.map((service, index) => `
      <article class="service-card advanced-service premium-card reveal tilt-card" style="--delay:${index}">
        <div class="service-glow"></div>

        <div class="service-top">
          <div class="service-icon">
            <i class="${service.icon}"></i>
          </div>
          <span class="service-badge">${service.level}</span>
        </div>

        <h3>${service.title}</h3>
        <p>${service.desc}</p>

        <div class="service-tags">
          ${service.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <a href="#contact" class="service-link">
          Discuss this service
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </article>
    `).join("");
  }

  /* ======================
     NAVIGATION
  ====================== */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");

      const icon = menuToggle.querySelector("i");

      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section");

  window.addEventListener("scroll", () => {
    let current = "home";

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 130) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });

  /* ======================
     TYPING EFFECT
  ====================== */

  const typedRole = document.getElementById("typedRole");

  const roles = [
    "BSc Computing Student",
    "Frontend Developer",
    "Database Enthusiast",
    "Data & AI Learner",
    "Creative Designer"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeRole() {
    if (!typedRole) return;

    const word = roles[roleIndex];

    if (deleting) {
      typedRole.textContent = word.slice(0, --charIndex);
    } else {
      typedRole.textContent = word.slice(0, ++charIndex);
    }

    let delay = deleting ? 55 : 95;

    if (!deleting && charIndex === word.length) {
      delay = 1400;
      deleting = true;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }

    setTimeout(typeRole, delay);
  }

  typeRole();

  /* ======================
     THEME TOGGLE
  ====================== */

  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("rohitPortfolioTheme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");

      localStorage.setItem(
        "rohitPortfolioTheme",
        document.body.classList.contains("light") ? "light" : "dark"
      );

      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    const icon = themeToggle?.querySelector("i");

    if (!icon) return;

    icon.className = document.body.classList.contains("light")
      ? "fa-solid fa-sun"
      : "fa-solid fa-moon";
  }

  /* ======================
     PROJECT FILTER + SEARCH
  ====================== */

  const projectFilters = document.getElementById("projectFilters");
  const projectSearch = document.getElementById("projectSearch");

  let activeProjectFilter = "all";

  function filterProjects() {
    const query = (projectSearch?.value || "").toLowerCase().trim();

    document.querySelectorAll(".project-card").forEach(card => {
      const category = card.dataset.category || "";
      const search = card.dataset.search || "";

      const matchFilter = activeProjectFilter === "all" || category.includes(activeProjectFilter);
      const matchSearch = !query || search.includes(query);

      card.classList.toggle("hide", !(matchFilter && matchSearch));
    });
  }

  if (projectFilters) {
    projectFilters.addEventListener("click", event => {
      const button = event.target.closest(".filter");

      if (!button) return;

      projectFilters.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      activeProjectFilter = button.dataset.filter;
      filterProjects();
    });
  }

  if (projectSearch) {
    projectSearch.addEventListener("input", filterProjects);
  }

  /* ======================
     CERTIFICATE FILTER
  ====================== */

  const certificateFilters = document.getElementById("certificateFilters");

  if (certificateFilters) {
    certificateFilters.addEventListener("click", event => {
      const button = event.target.closest(".filter");

      if (!button) return;

      certificateFilters.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      renderCertificates(button.dataset.filter);
    });
  }

  /* ======================
     SCROLL REVEAL
  ====================== */

  function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(element => {
      if (element.getBoundingClientRect().top < window.innerHeight - 90) {
        element.classList.add("show");
      }
    });
  }

  window.revealOnScroll = revealOnScroll;

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  /* ======================
     COUNTERS
  ====================== */

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.counter);

      let number = 0;
      const step = Math.max(1, Math.ceil(target / 32));

      const timer = setInterval(() => {
        number += step;

        if (number >= target) {
          number = target;
          clearInterval(timer);
        }

        element.textContent = `${number}+`;
      }, 32);

      counterObserver.unobserve(element);
    });
  }, { threshold: 0.45 });

  document.querySelectorAll("[data-counter]").forEach(element => {
    counterObserver.observe(element);
  });

  /* ======================
     ADVANCED 3D CARD TILT
  ====================== */

  function attachTilt() {
    const cards = document.querySelectorAll(
      ".tilt-card, .premium-card, .project-card, .service-card, .skill-card, .cert-card"
    );

    cards.forEach(card => {
      card.addEventListener("mousemove", event => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-12px)
          scale(1.02)
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  attachTilt();

  /* ======================
     BACK TO TOP
  ====================== */

  const backTop = document.getElementById("backTop");

  window.addEventListener("scroll", () => {
    if (backTop) {
      backTop.classList.toggle("show", window.scrollY > 520);
    }
  });

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ======================
     3D ANIMATED BACKGROUND
  ====================== */

  function initThreeBackground() {
    const canvas = document.getElementById("threeBackground");

    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 900;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 18;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.75
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.018, 16, 120),
      new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.45
      })
    );

    torus.position.set(2.8, 1.2, -1.5);
    scene.add(torus);

    const secondTorus = new THREE.Mesh(
      new THREE.TorusGeometry(1.1, 0.015, 16, 100),
      new THREE.MeshBasicMaterial({
        color: 0xec4899,
        transparent: true,
        opacity: 0.35
      })
    );

    secondTorus.position.set(-3, -1.4, -1.2);
    scene.add(secondTorus);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", event => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);

      particles.rotation.y += 0.0009;
      particles.rotation.x += 0.0004;

      torus.rotation.x += 0.006;
      torus.rotation.y += 0.004;

      secondTorus.rotation.x -= 0.004;
      secondTorus.rotation.y += 0.005;

      camera.position.x += (mouseX * 0.35 - camera.position.x) * 0.035;
      camera.position.y += (-mouseY * 0.35 - camera.position.y) * 0.035;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  initThreeBackground();

  /* ======================
     EMAILJS CONTACT FORM
  ====================== */

  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

  if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY
    });
  }

  const contactForm = document.getElementById("contactForm");
  const sendBtn = document.getElementById("sendBtn");
  const formStatus = document.getElementById("formStatus");

  function setError(id, message) {
    const input = document.getElementById(id);
    const small = input?.closest(".form-row")?.querySelector("small");

    if (small) {
      small.textContent = message;
    }
  }

  function clearFormErrors() {
    document.querySelectorAll(".form-row small").forEach(small => {
      small.textContent = "";
    });

    if (formStatus) {
      formStatus.textContent = "";
      formStatus.className = "form-status";
    }
  }

  function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      clearFormErrors();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      let ok = true;

      if (!name) {
        setError("name", "Name is required.");
        ok = false;
      }

      if (!email) {
        setError("email", "Email is required.");
        ok = false;
      } else if (!validEmail(email)) {
        setError("email", "Enter a valid email address.");
        ok = false;
      }

      if (!subject) {
        setError("subject", "Subject is required.");
        ok = false;
      }

      if (!message) {
        setError("message", "Message is required.");
        ok = false;
      }

      if (!ok) return;

      if (
        EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
        EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID"
      ) {
        formStatus.textContent =
          "EmailJS is not connected yet. Please add your EmailJS Public Key, Service ID, and Template ID.";
        formStatus.classList.add("error");
        return;
      }

      sendBtn.classList.add("loading");
      sendBtn.disabled = true;

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        subject,
        message,
        to_email: "rohitbhagat6574@gmail.com"
      })
      .then(() => {
        formStatus.textContent = "Your message has been sent successfully.";
        formStatus.classList.add("success");
        contactForm.reset();
      })
      .catch(error => {
        console.error("EmailJS error:", error);
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.classList.add("error");
      })
      .finally(() => {
        sendBtn.classList.remove("loading");
        sendBtn.disabled = false;
      });
    });
  }

  /* ======================
     FINAL RESPONSIVE OPTIMIZER
  ====================== */

  function optimizeForResponsiveDevices() {
    const isSmall = window.innerWidth <= 820;
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    document.body.classList.toggle("reduced-3d", isSmall || isTouch);

    if (isSmall || isTouch) {
      document.querySelectorAll(
        ".premium-card, .project-card, .service-card, .skill-card, .cert-card, .journey-item, .lab3d-card"
      ).forEach(card => {
        card.style.transform = "";
      });
    }
  }

  optimizeForResponsiveDevices();
  window.addEventListener("resize", optimizeForResponsiveDevices);

});
