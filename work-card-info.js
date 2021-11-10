const workPopup = document.querySelector('.work-popup');
const workCardContainer = document.querySelector('.grid-container');
const workCard1 = document.querySelector('#work-container-1');
const bodyCard = document.querySelector('body');

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
    description: 'This is a good description. A great description even. But sometimes we need to stop. Maybe, make some tea, or coffe, what you prefer. Do you know, that you need only three steps in your skincare routine? First one is a cleanser, then moisturizer, and, finally, sunscreen! Sunscreen is really important for our skin, because it is creating a protecting barrier on our skin and works as a prevention of skin cancer! That is why you need it in your skincare routine! And now, welcome some beautiful filler words to make this desription even longer, so then I can see if my code is working or not. By the way, have a great day!',
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
    tags: ['Ruby on rails', 'html', 'css', 'javaScript'],
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

for (let i = 0; i < workCards.length; i += 1) {
  //  card copy
  const workCardCopy = workCard1.cloneNode(true);
  // images
  const img = workCardCopy.querySelector('.work-img');
  img.setAttribute('src', workCards[i].imageSrc);
  //    change the title
  const title = workCardCopy.querySelector('h3');
  title.innerText = workCards[i].title;
  // company name
  const comName = workCardCopy.querySelector('.work-client');
  comName.innerText = workCards[i].subtitle.company;
  // job position
  const workRole = workCardCopy.querySelector('.work-role');
  workRole.innerText = workCards[i].subtitle.position;
  // year
  const workYear = workCardCopy.querySelector('.work-year');
  workYear.innerText = workCards[i].subtitle.year;
  //    make the tags
  const tag = workCardCopy.querySelector('.work-container .work-tag');
  const tagContainer = workCardCopy.querySelector('.work-container .work-tags');
  for (let j = 0; j < workCards[i].tags.length; j += 1) {
    const tagCopy = tag.cloneNode(true);
    tagCopy.innerText = workCards[i].tags[j];
    tagContainer.appendChild(tagCopy);
  }
  tag.remove();

  // set open button
  function openCardPopup() {
    if (workPopup.style.display === 'none') {
      workPopup.style.display = 'block';
    } else {
      workPopup.style.display = 'none';
    }
  }

  // popup
  const openBtn = workCardCopy.querySelector('.work-btn');
  openBtn.addEventListener('click', () => {
    // images
    const cardImg = workPopup.querySelectorAll('.work-img-popup');
    cardImg.forEach((cardImg) => {
      cardImg.setAttribute('src', workCards[i].imageSrc);
    });
    //title
    const cardTitle = workPopup.querySelector('.work-popup h3');
    cardTitle.innerText = workCards[i].title;
    // company name
    const comNamePp = workPopup.querySelector('.work-popup .work-client');
    comNamePp.innerText = workCards[i].subtitle.company;
    // job position
    const workRolePp = workPopup.querySelector('.work-popup .work-role');
    workRolePp.innerText = workCards[i].subtitle.position;
    // year
    const workYearPp = workPopup.querySelector('.work-popup .work-year');
    workYearPp.innerText = workCards[i].subtitle.year;
    // description
    const descriptionPp = workPopup.querySelector('.work-popup p');
    descriptionPp.innerText = workCards[i].description;
    // tags
    const tagPp = workPopup.querySelector('.work-popup .work-tag');
    const tagContainerPp = workPopup.querySelector('.work-popup .work-tags');
    for (let j = 0; j < workCards[i].tags.length; j += 1) {
      const tagCopyPp = tagPp.cloneNode(true);
      tagCopyPp.innerText = workCards[i].tags[j];
      tagContainerPp.appendChild(tagCopyPp);
    }
    tagPp.remove();

    bodyCard.style.overflow = 'hidden';

    openCardPopup();

  });

  function closeCardPopup() {
    if (workPopup.style.display === 'block') {
      workPopup.style.display = 'none';
    }
    bodyCard.style.overflow = 'auto';
  }

  const closeCardBtn = document.querySelector('.work-close-btn');
  closeCardBtn.addEventListener('click', closeCardPopup);

  workCardContainer.appendChild(workCardCopy);
}
workCard1.remove();
