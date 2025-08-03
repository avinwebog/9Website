 const counters = document.querySelectorAll('.counter');
  const speed = 100;

  const startCounter = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  let sectionShown = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('section');
    const sectionTop = section.getBoundingClientRect().top;

    if (!sectionShown && sectionTop < window.innerHeight - 100) {
      startCounter();
      sectionShown = true;
    }
  });


  //Event Modal 
  
  const eventModal = document.getElementById('eventModal');

  eventModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;

    // Fetch values from button
    const title = button.getAttribute('data-title');
    const date = button.getAttribute('data-date');
    const time = button.getAttribute('data-time');
    const location = button.getAttribute('data-location');
    const description = button.getAttribute('data-description');
    const ppt = button.getAttribute('data-ppt');
    const images = JSON.parse(button.getAttribute('data-images'));

    // Update modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('modalTime').textContent = time;
    document.getElementById('modalLocation').textContent = location;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPPT').src = ppt;

    // Load carousel images
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';

    images.forEach((src, index) => {
      const item = document.createElement('div');
      item.className = 'carousel-item' + (index === 0 ? ' active' : '');
      item.innerHTML = `<img src="${src}" class="d-block w-100" style="max-height:400px; object-fit:cover;">`;
      carouselInner.appendChild(item);
    });
  });

  eventModal.addEventListener('hidden.bs.modal', () => {
    document.getElementById('modalPPT').src = ''; // Stop PPT when closed
  });

