document.addEventListener('DOMContentLoaded', () => {
	const faqs = document.querySelectorAll('.c-faq');
	
	faqs.forEach(faq => {
	  const title = faq.querySelector('.c-faq__title');
	  title.addEventListener('click', () => {
		faq.classList.toggle('c-faq--active');
	  });
	});
  });