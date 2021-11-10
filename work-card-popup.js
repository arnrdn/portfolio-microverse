const workPopup = document.querySelector('.work-popup');
const workOverlay = document.querySelector('.work-overlay');
const workContent = document.querySelector('.work-content');
const workCard1 = document.querySelector('#work-container-1');
const workCardContainer = document.querySelector('#portfolio');
const bodyCard = document.querySelector('body');
const openCardBtn = document.querySelectorAll('.work-btn');
const closeCardBtn = document.querySelectorAll('.work-close-btn');

// object with info

const workCards = [
  {
    title: 'Tonic',
    subtitle: {
      company: 'CANOPY',
      position: 'Back End Dev',
      year: 2015,
    },
    imageSrc: './images/work-example-d-1.png',
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

// cards itself
for (let i = 0; i < workCards.length; i += 1) {
  let workCardCopy = workCard1.cloneNode(true);
  // give the titles to cards
  const title = workCardCopy.querySelector('h3');
  title.innerText = workCards[i].title;
  // set the tags
  const tag = workCardCopy.querySelector('.work-tag');
  const tagContainer = workCardCopy.querySelector('.work-tags')
  for (let j = 0; j < workCards[i].tags.length; j += 1) {
    let tagCopy = tag.cloneNode(true);
    tagCopy.innerText = workCards[i].tags[j];
    tagContainer.appendChild(tagCopy);
  }
  tag.remove();
  // change the information about project
  const companyInfo = workCardCopy.querySelector('.work-client');
  companyInfo.innerText = workCards[i].subtitle.company;
  // change the information about job title
  const workRole = workCardCopy.querySelector('.work-role');
  workRole.innerText = workCards[i].subtitle.position;
  // change the information about the year
  const workYear = workCardCopy.querySelector('.work-year');
  workYear.innerText = workCards[i].subtitle.year;
  // change the images
  function changeImg(imageSrc) {
    const img = workCardCopy.querySelector('.work-img');
    img.setAttribute('src', imageSrc);
  }
  changeImg(workCards[i].imageSrc);
  // post the cards
  workCardContainer.appendChild(workCardCopy);
}
workCard1.remove();

for (let i = 0; i < openCardBtn.length; i += 1) {
  openCardBtns[i].addEventListener('click', () => {
    workPopup.classList.toggle('invisible');
    bodyCard.style.overflow = 'hidden';
  });
}

// card popups

