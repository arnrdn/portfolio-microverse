const openCardBtns = Array.from(document.querySelectorAll('#portfolio .work-btn'));
const workCard = document.querySelector('.work-overlay');
const body1 = document.querySelector('body');

const workCards = [
  {
    title: 'Tonic',
    subtitle: {
      company: 'CANOPY',
      position: 'Back End Dev',
      year: 2015,
    },
    imageSrc: './images/card-desktop-modal.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'css', 'javaScript'],
    liveDemoLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: {
      company: 'FACEBOOK',
      position: 'Full Stack Dev',
      year: 2015,
    },
    imageSrc: './images/work-example-d-2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveDemoLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Facebook 360',
    subtitle: {
      company: 'FACEBOOK',
      position: 'Full Stack Dev',
      year: 2015,
    },
    imageSrc: './images/work-example-d-3.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    liveDemoLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Uber Navigation',
    subtitle: {
      company: 'Uber',
      position: 'Lead Developer',
      year: 2018,
    },
    imageSrc: './images/work-example-d-4.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['html', 'css', 'javaScript', 'Ruby on rails'],
    liveDemoLink: '#',
    sourceLink: '#',
  },
];

function setCardImageSrc(imageSrc) {
  const img = workCard.querySelector('.work-img-d-popup');
  img.setAttribute('src', imageSrc);
}

for (let i = 0; i < openCardBtns.length; i += 1) {
  openCardBtns[i].addEventListener('click', () => {
    workCard.classList.toggle('invisible');
    setCardImageSrc(workCards[i].imageSrc);
    body1.style.overflow = 'hidden';
  });
}
