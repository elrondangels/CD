// ==================================================
// Modern E-Commerce Theme - JavaScript Functionality
// ==================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all theme functionality
  initTheme();
});

function initTheme() {
  // Cart functionality
  initCart();

  // Search functionality
  initSearch();

  // Mobile menu
  initMobileMenu();

  // Product filters
  initProductFilters();

  // Testimonials
  initTestimonials();

  // FAQ accordions
  initFAQs();

  // Forms
  initForms();

  // Lazy loading for images
  initLazyLoading();

  // Sticky header
  initStickyHeader();

  // Product quick view (if applicable)
  initQuickView();

  // Announcement bar (if needed)
  initAnnouncementBar();
}

// Cart Functionality
function initCart() {
  const cartButtons = document.querySelectorAll('.btn[data-action="add-to-cart"]');
  const cartCount = document.querySelector('.cart-count');

  cartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();

      // Add loading state
      this.classList.add('loading');
      this.textContent = 'Adding...';

      // Simulate adding to cart (replace with actual Shopify cart API)
      setTimeout(() => {
        this.classList.remove('loading');
        this.textContent = 'Added to Cart';

        // Update cart count
        if (cartCount) {
          const currentCount = parseInt(cartCount.textContent) || 0;
          cartCount.textContent = currentCount + 1;
          cartCount.style.display = 'block';
        }

        // Show success message
        showNotification('Product added to cart!', 'success');

        // Reset button after 2 seconds
        setTimeout(() => {
          this.textContent = 'Add to Cart';
        }, 2000);
      }, 1000);
    });
  });
}

// Search Functionality
function initSearch() {
  const searchToggle = document.querySelector('.header__search-toggle');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', function() {
      searchOverlay.classList.toggle('active');
      if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
      }
    });

    // Close search on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
      }
    });

    // Search input handling
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();

        if (query.length > 2) {
          searchTimeout = setTimeout(() => {
            performSearch(query);
          }, 300);
        } else if (searchResults) {
          searchResults.innerHTML = '';
        }
      });
    }
  }
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('active');

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close on overlay click
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Animate hamburger
    const lines = menuToggle.querySelectorAll('.menu-toggle__line');
    lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';

    // Reset hamburger
    const lines = menuToggle.querySelectorAll('.menu-toggle__line');
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
  }
}

// Product Filters
function initProductFilters() {
  const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
  const clearFiltersBtn = document.querySelector('.clear-filters');

  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      applyFilters();
    });
  });

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', function() {
      filterCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      applyFilters();
    });
  }
}

function applyFilters() {
  // In a real implementation, this would filter products via AJAX
  // For now, we'll just update the URL with filter parameters
  const activeFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
    .map(cb => cb.value);

  if (activeFilters.length > 0) {
    const params = new URLSearchParams(window.location.search);
    params.set('filters', activeFilters.join(','));
    window.location.search = params.toString();
  } else {
    // Remove filters from URL
    const params = new URLSearchParams(window.location.search);
    params.delete('filters');
    const newUrl = params.toString() ? '?' + params.toString() : window.location.pathname;
    window.location.href = newUrl;
  }
}

// Testimonials Slider
function initTestimonials() {
  const testimonialsTrack = document.querySelector('.testimonials-track');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonials-prev');
  const nextBtn = document.querySelector('.testimonials-next');

  if (testimonialsTrack && testimonialCards.length > 0) {
    let currentSlide = 0;
    const totalSlides = testimonialCards.length;

    function updateSlider() {
      testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
      });
    });

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
  }
}

// FAQ Accordions
function initFAQs() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
      question.addEventListener('click', function() {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
}

// Forms
function initForms() {
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterForm);
  }

  // Service booking form
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBookingForm);
  }
}

function handleContactForm(e) {
  e.preventDefault();

  // Basic validation
  const requiredFields = this.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--color-error)';
      isValid = false;
    } else {
      field.style.borderColor = 'var(--color-border)';
    }
  });

  if (!isValid) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }

  // Show loading
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

function handleNewsletterForm(e) {
  e.preventDefault();

  const email = this.querySelector('input[type="email"]').value;

  if (!email) {
    showNotification('Please enter your email address.', 'error');
    return;
  }

  // Simulate subscription
  setTimeout(() => {
    showNotification('Thank you for subscribing!', 'success');
    this.reset();
  }, 1000);
}

function handleBookingForm(e) {
  e.preventDefault();

  // Basic validation
  const requiredFields = this.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--color-error)';
      isValid = false;
    } else {
      field.style.borderColor = 'var(--color-border)';
    }
  });

  if (!isValid) {
    showNotification('Please fill in all required fields.', 'error');
    return;
  }

  // Show loading
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Booking...';
  submitBtn.disabled = true;

  // Simulate booking
  setTimeout(() => {
    showNotification('Booking request submitted! We\'ll contact you soon.', 'success');
    this.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // Close modal if it exists
    const modal = document.getElementById('bookingModal');
    if (modal) {
      modal.classList.remove('active');
    }
  }, 2000);
}

// Lazy Loading
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

// Sticky Header
function initStickyHeader() {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }

      lastScrollY = currentScrollY;
    });
  }
}

// Quick View (placeholder for future implementation)
function initQuickView() {
  // This would be implemented for product quick view functionality
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');

  quickViewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      // Implement quick view modal
      console.log('Quick view clicked');
    });
  });
}

// Announcement Bar (placeholder)
function initAnnouncementBar() {
  // This could be used for promotional messages
}

// Utility Functions
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification__content">
      <p>${message}</p>
    </div>
    <button class="notification__close" aria-label="Close notification">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  `;

  // Add to page
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add('active'), 100);

  // Auto hide after 5 seconds
  setTimeout(() => {
    notification.classList.remove('active');
    setTimeout(() => notification.remove(), 300);
  }, 5000);

  // Close button
  const closeBtn = notification.querySelector('.notification__close');
  closeBtn.addEventListener('click', () => {
    notification.classList.remove('active');
    setTimeout(() => notification.remove(), 300);
  });
}

// Perform search (placeholder)
function performSearch(query) {
  // This would make an AJAX request to Shopify's search API
  console.log('Searching for:', query);
}

// Add notification styles
const notificationStyles = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  }

  .notification.active {
    transform: translateX(0);
  }

  .notification--success {
    border-left: 4px solid var(--color-success);
  }

  .notification--error {
    border-left: 4px solid var(--color-error);
  }

  .notification--info {
    border-left: 4px solid var(--color-primary);
  }

  .notification__content {
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .notification__close {
    position: absolute;
    top: var(--spacing-sm);
    right: var(--spacing-sm);
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-light);
    padding: var(--spacing-xs);
  }

  .notification__close:hover {
    color: var(--color-text);
  }
`;

// Add notification styles to head
const style = document.createElement('style');
style.textContent = notificationStyles;
document.head.appendChild(style);

// Add sticky header styles
const stickyStyles = `
  .header.sticky {
    box-shadow: var(--shadow-lg);
  }
`;
style.textContent += stickyStyles;
