const openCardBtn = document.querySelector('#portfolio .work-btn');
const workCard = document.querySelector('.work-overlay');
const body1 = document.querySelector('body');
const closeCardBtns = document.querySelectorAll('.work-close-btn');
const workCard1 = document.querySelector('#work-container-1');
const workCardContainer = document.querySelector('#portfolio');

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
    description: 'This is a good description. A great description even. But sometimes we need to stop. Maybe, make some tea, or coffe, what you prefer. Do you know, that you need only three steps in your skincare routine? First one is a cleanser, then moisturizer, and, finally, sunscreen! Sunscreen is really important for our skin, because it is creating a protecting barrier on our skin and works as a prevention of skin cancer! That is why you need it in your skincare routine! And now, welcome some beautiful filler words to make this desription even longer, so then I can see i my code is working or not. By the way, have a great day!',
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
    description: 'Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails.',
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



function setImageSrc(imageSrc) {
  const img = workCardContainer.querySelector('.work-img');
  img.setAttribute('src', imageSrc);
}

function setDescription(description) {
  const descriptionCard = workCardCopy.querySelector('.work-popup-p');
  descriptionCard.textContent = description;
};

function setCompanyName(company) {
  const comName = workCardCopy.querySelector('.work-client');
  comName.textContent = company;
};

function setPositionName(position) {
  const positionName = workCardCopy.querySelector('.work-role');
  positionName.textContent = position;
};

function setWorkYear(year) {
  const workYear = workCardCopy.querySelector('.work-year');
  workYear.textContent = year;
};

for (let i = 0; i < workCards.length; i += 1) {
  // card copy
  const workCardCopy = workCard1.cloneNode(true);
  // change the title
  const title = workCardCopy.querySelector('h3');
  title.innerText = workCards[i].title;
  // make the tags
  const tag = workCardCopy.querySelector('.work-tag');
  const tagContainer = workCardCopy.querySelector('.work-tags')

  setImageSrc(workCards[i].imageSrc);
  for (let j = 0; j < workCards[i].tags.length; j += 1) {
    console.log(workCards[i].tags[j]);
    let tagCopy = tag.cloneNode(true);
    tagCopy.innerText = workCards[i].tags[j];
    tagContainer.appendChild(tagCopy);
  }

  openCardBtns[i].addEventListener('click', () => {
    workCard.classList.toggle('invisible');
    body1.style.overflow = 'hidden';
  });
  workCardContainer.appendChild(workCardCopy);
}
workCard1.remove();

// const seeProjectBtn = workCardCopy.querySelector('.work-btn');
// seeProjectBtn.addEventListener('click', () => {
//   workCard.classList.toggle('invisible');
//   const img = workCardContainer.querySelector('.work-img');
//   img.setAttribute('src', imageSrc);
//   body1.style.overflow = 'hidden';
// });


for (let i = 0; i < openCardBtn.length; i += 1) {
  openCardBtns[i].addEventListener('click', () => {
    workCard.classList.toggle('invisible');
    setCardTitle(workCards[i].title);
    setImageSrc(workCards[i].imageSrc);
    setCompanyName(workCards[i].subtitle.company);
    setPositionName(workCards[i].subtitle.position);
    setWorkYear(workCards[i].subtitle.year);
    setDescription(workCards[i].description);
    body1.style.overflow = 'hidden';
    for (let j = 0; j < workCards[i].tags.length; i += 1) {
      let newTag = document.createElement('li').innerHTML = `<a href="#" class="work-tag-link">${workCards[i].tags[j]}</a>`;
      newTag.setAttribute('class', 'work-tag');
      document.ul.appendChild(newTag);
    }
  });
}



for (let i = 0; i < closeCardBtns.length; i += 1) {
  closeCardBtns[i].addEventListener('click', () => {
    workCard.classList.toggle('invisible');
    body1.style.overflow = 'auto';
  });
}