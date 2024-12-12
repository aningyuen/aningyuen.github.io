const projectTitles = document.querySelectorAll('.project-title');
const projectDetails = document.querySelectorAll('.project-detail');

projectTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    projectDetails.forEach(detail => detail.classList.remove('active'));
    projectDetails[index].classList.add('active');
  });
});
