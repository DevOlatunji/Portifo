jQuery(document).ready(function(){
  // domain
  const domain = "https://dev.olatunji.com.ng/";
  // NAVIGATION
  const frontEndNavBar = jQuery('.nav-menu-container');
  const frontEndMenuToggler = jQuery('.navbar-toggler');
    
  frontEndMenuToggler.click(() => {
    const icon = frontEndMenuToggler.find('i');
    if (icon.hasClass('fa-bars')) {
    icon.removeClass('fa-bars').addClass('fa-times');
    } else {
    icon.removeClass('fa-times').addClass('fa-bars');
    }
    
    frontEndNavBar.toggleClass('show');
  });

  // AOS
  AOS.init({
      duration: 1000,
      once: true,
      mirror: false
  });

  // TYPING TEXT
  let letters = [
      "I am Dev Olatunji.",
      "I amplify business efforts.",
      "I craft logics that bring profit.",
      "I build systems for productivity.",
      "I built Shopa - Inventory solution.",
      "I built Muva - Logistics solution.",
    //   "I built Eduk8 - Smart solution for smart schools.",
      "It's time to build yours.",
      // "I am a consultant",
      "Let's work together!"
  ];

  async function writingTextDisplay(paragraphs, element = "#typing-text") {
  // Input checks
  if (!Array.isArray(paragraphs)) {
      console.error("Expected an array of paragraphs.");
      return;
  }

  if (paragraphs.length === 0) {
      console.error("Array must not be empty.");
      return;
  }

  const typingText = document.querySelector(element);
  if (!typingText) {
      console.error(`Element with the selector jQuery{elemet} not found`);
      return;
  }

  typingText.style.whiteSpace = 'pre-wrap'; // Preserve spaces and line breaks

  for (const paragraph of paragraphs) {
      typingText.innerText = ""; // Clear previous paragraph

      for (let i = 0; i < paragraph.length; i++) {
          const char = paragraph[i];
          typingText.innerText += char;
          await new Promise(resolve => setTimeout(resolve, 100)); // Typing speed
      }

      await new Promise(resolve => setTimeout(resolve, 2000)); // Pause before next paragraph
  }
  }


  async function writingTextDisplayLoop(variable, element= "#typing-text", infiniteLoop = true) {
  while (infiniteLoop) {
      await writingTextDisplay(variable, element);
  }
  }

  writingTextDisplayLoop(letters);

  // Initialize Isotope
    const grid = jQuery('.projects-grid');
    const iso = new Isotope(grid[0], {
      itemSelector: '.project-item',
      layoutMode: 'masonry',
      masonry: {
        gutter: 20
      }
    });
    
    // Filter tabs
    const filters = document.querySelectorAll('.filter-tabs li');
    
    filters.forEach(tab => {
      tab.addEventListener('click', () => {
        const filterValue = tab.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
    
        filters.forEach(f => f.classList.remove('active'));
        tab.classList.add('active');
      });
    });
    
    /*==========================================================================
    CONTACT FORM
    ==========================================================================*/
    const jQueryform = jQuery('#contact-form');
    const jQuerysubmitBtn = jQuery('#send-contact');

    function validateForm() {
        let isValid = true;
        jQueryform.find('[required]').each(function () {
            if (!jQuery(this).val().trim()) {
                isValid = false;
            }
        });

        if (isValid) {
            jQuerysubmitBtn.removeClass('disabled').prop('disabled', false);
        } else {
            jQuerysubmitBtn.addClass('disabled').prop('disabled', true);
        }
    }
    
    jQueryform.on('input change', 'input, textarea, select', validateForm);
    
    jQueryform.on('submit', function (e) {
        e.preventDefault();
        if (jQuerysubmitBtn.hasClass('disabled')) return;

        const formData = jQueryform.serialize();

        jQuery.ajax({
            url: domain+'Engine/forms/contact-form/save-form.php',
            method: 'POST',
            data: formData,
            success: function (response) {
                Swal.fire("Success", "Your message has been received successfully!", "success");
                jQueryform.trigger("reset");
                validateForm(); 
            },
            error: function () {
                alert("Something went wrong. Please try again.");
            }
        });
    });
    
    validateForm();


// jquery closing tag
});