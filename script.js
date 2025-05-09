// Login/Signup
function toggleAuth() {
  const signup = document.getElementById("authSignUp");
  const login = document.getElementById("authLogin");
  signup.classList.toggle("d-none");
  login.classList.toggle("d-none");
}




// document.getElementById("showLogin").addEventListener("click", function () {
//   document.getElementById("loginForm").classList.remove("d-none");
//   document.getElementById("signupForm").classList.add("d-none");
// });

// document.getElementById("showSignup").addEventListener("click", function () {
//   document.getElementById("signupForm").classList.remove("d-none");
//   document.getElementById("loginForm").classList.add("d-none");
// });

// document
//   .getElementById("switchToSignup")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("signupForm").classList.remove("d-none");
//     document.getElementById("loginForm").classList.add("d-none");
//   });

// document
//   .getElementById("switchToLogin")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("loginForm").classList.remove("d-none");
//     document.getElementById("signupForm").classList.add("d-none");
//   });


  // Search Filter
  
  document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll('.filter');
    const publications = document.querySelectorAll('.publication');
    const searchInput = document.querySelector("#searchInput");
  
    function applyFilters() {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      const activeFilters = {
        volume: [],
        year: [],
        topic: [],
        author: []
      };
  
      filters.forEach(input => {
        if (input.checked) {
          const type = input.getAttribute('data-filter-type');
          activeFilters[type].push(input.value.toLowerCase());
        }
      });
  
      publications.forEach(pub => {
        const matchesFilters = Object.entries(activeFilters).every(([type, values]) => {
          return values.length === 0 || values.includes(pub.dataset[type]);
        });
  
        const textContent = pub.textContent.toLowerCase();
        const matchesSearch = textContent.includes(searchTerm);
  
        const show = matchesFilters && matchesSearch;
  
        pub.style.opacity = show ? "1" : "0";
        setTimeout(() => {
          pub.style.display = show ? "block" : "none";
        }, show ? 0 : 400);
      });
    }
  
    filters.forEach(filter => {
      filter.addEventListener('change', applyFilters);
    });
  
    searchInput.addEventListener('input', applyFilters);
  });


  // JOURNAL DIRCTORY TAB PRICIPLES

  const links = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Remove active classes
    links.forEach(l => l.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Add active to clicked tab and its content
    this.classList.add("active");
    document.getElementById(this.dataset.tab).classList.add("active");
  });
});

// header update
//  const tabLinks = document.querySelectorAll('.tab-link');
//  const tabTitle = document.getElementById('tab-title');

//  tabLinks.forEach(link => {
//    link.addEventListener('click', function (e) {
//      e.preventDefault();
//      const title = this.getAttribute('data-title');
//      tabTitle.textContent = title;
//    });
//  });

// Breadcrumb 

 // Function to get query parameters
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      volume: params.get('volume'),
      issue: params.get('issue'),
      topic: params.get('topic'),
      subject: params.get('subject')
    };
  }

  // Function to create breadcrumb
  function createBreadcrumb(params) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item"><a href="volume.html?volume=${params.volume}">Volume ${params.volume}</a></li>
      <li class="breadcrumb-item"><a href="issue.html?volume=${params.volume}&issue=${params.issue}">Issue ${params.issue}</a></li>
      <li class="breadcrumb-item active" aria-current="page">${params.topic}</li>
    `;
  }

  // Function to set article header
  function setArticleHeader(params) {
    document.getElementById('article-title').textContent = params.topic;
    document.getElementById('article-meta').textContent = `Subject: ${params.subject} | Volume ${params.volume} | Issue ${params.issue}`;
  }

  // Initialize functions
  const params = getQueryParams();
  createBreadcrumb(params);
  setArticleHeader(params);