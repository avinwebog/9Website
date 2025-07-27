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