// Login/Signup
document.getElementById("showLogin").addEventListener("click", function () {
  document.getElementById("loginForm").classList.remove("d-none");
  document.getElementById("signupForm").classList.add("d-none");
});

document.getElementById("showSignup").addEventListener("click", function () {
  document.getElementById("signupForm").classList.remove("d-none");
  document.getElementById("loginForm").classList.add("d-none");
});

document
  .getElementById("switchToSignup")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("signupForm").classList.remove("d-none");
    document.getElementById("loginForm").classList.add("d-none");
  });

document
  .getElementById("switchToLogin")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("loginForm").classList.remove("d-none");
    document.getElementById("signupForm").classList.add("d-none");
  });



  // document.addEventListener("DOMContentLoaded", function () {
  //   const filters = document.querySelectorAll('.filter');
  //   const publications = document.querySelectorAll('.publication');

  //   filters.forEach(filter => {
  //     filter.addEventListener('change', () => {
  //       const activeFilters = {
  //         volume: [],
  //         year: [],
  //         topic: [],
  //         author: []
  //       };

  //       filters.forEach(input => {
  //         if (input.checked) {
  //           const type = input.getAttribute('data-filter-type');
  //           activeFilters[type].push(input.value.toLowerCase());
  //         }
  //       });

  //       publications.forEach(pub => {
  //         const matches = Object.entries(activeFilters).every(([type, values]) => {
  //           return values.length === 0 || values.includes(pub.dataset[type]);
  //         });

  //         pub.style.display = matches ? 'block' : 'none';
  //       });
  //     });
  //   });
  // });


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












// FILTER
  // document.addEventListener("DOMContentLoaded", function () {
  //   const filters = document.querySelectorAll('.filter');
  //   const publications = document.querySelectorAll('.publication');

  //   filters.forEach(filter => {
  //     filter.addEventListener('change', () => {
  //       const activeFilters = {
  //         volume: [],
  //         year: [],
  //         topic: [],
  //         author: []
  //       };

  //       filters.forEach(input => {
  //         if (input.checked) {
  //           const type = input.getAttribute('data-filter-type');
  //           activeFilters[type].push(input.value.toLowerCase());
  //         }
  //       });

  //       publications.forEach(pub => {
  //         const matches = Object.entries(activeFilters).every(([type, values]) => {
  //           return values.length === 0 || values.includes(pub.dataset[type]);
  //         });

  //         pub.style.display = matches ? 'block' : 'none';
  //       });
  //     });
  //   });
  // });













//  document.addEventListener("DOMContentLoaded", () => {
//    const checkboxes = document.querySelectorAll('.filter-panel input[type="checkbox"]');
//    const pubs = document.querySelector('.publication');

//    checkboxes.forEach(box => {
//      box.addEventListener('change', () => {
//        const filters = {
//          volume: getCheckedValues('Volume'),
//          year: getCheckedValues('Year'),
//          topic: getCheckedValues('Topic'),
//          author: getCheckedValues('Author')
//        };

//        issues.forEach(issue => {
//          const match =
//            (filters.volume.length === 0 || filters.volume.includes(issue.dataset.volume)) &&
//            (filters.year.length === 0 || filters.year.includes(issue.dataset.year)) &&
//            (filters.topic.length === 0 || filters.topic.includes(issue.dataset.topic)) &&
//            (filters.author.length === 0 || filters.author.includes(issue.dataset.author));

//           issue.style.display = match ? "block" : "none";
//         });
//       });
//     });

//     function getCheckedValues(title) {
//       const section = Array.from(document.querySelectorAll('.filter-group'))
//         .find(g => g.querySelector('h4')?.innerText === title);

//       if (!section) return [];

//       return Array.from(section.querySelectorAll('input[type="checkbox"]:checked'))
//         .map(cb => cb.value);
//     }
//   });

