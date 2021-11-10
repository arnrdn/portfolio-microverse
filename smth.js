//   workCardContainer.appendChild(workCardCopy);
// }
// workCard1.remove();

// function setImageSrc(imageSrc) {
//   const img = workCardContainer.querySelector('.work-img');
//   img.setAttribute('src', imageSrc);
// }

// function setDescription(description) {
//   const descriptionCard = workCardCopy.querySelector('.work-popup-p');
//   descriptionCard.textContent = description;
// };

// function setCompanyName(company) {
//   const comName = workCardCopy.querySelector('.work-client');
//   comName.textContent = company;
// };

// function setPositionName(position) {
//   const positionName = workCardCopy.querySelector('.work-role');
//   positionName.textContent = position;
// };

// function setWorkYear(year) {
//   const workYear = workCardCopy.querySelector('.work-year');
//   workYear.textContent = year;
// };



// const seeProjectBtn = workCardCopy.querySelector('.work-btn');
// seeProjectBtn.addEventListener('click', () => {
//   workCard.classList.toggle('invisible');
//   const img = workCardContainer.querySelector('.work-img');
//   img.setAttribute('src', imageSrc);
//   body1.style.overflow = 'hidden';
// });


// for (let i = 0; i < openCardBtn.length; i += 1) {
//   openCardBtn[i].addEventListener('click', () => {
//     workCard.classList.toggle('invisible');
//     setCardTitle(workCards[i].title);
//     setImageSrc(workCards[i].imageSrc);
//     setCompanyName(workCards[i].subtitle.company);
//     setPositionName(workCards[i].subtitle.position);
//     setWorkYear(workCards[i].subtitle.year);
//     setDescription(workCards[i].description);
//     body1.style.overflow = 'hidden';
//     for (let j = 0; j < workCards[i].tags.length; i += 1) {
//       let newTag = document.createElement('li').innerHTML = `<a href="#" class="work-tag-link">${workCards[i].tags[j]}</a>`;
//       newTag.setAttribute('class', 'work-tag');
//       document.ul.appendChild(newTag);
//     }
//   });
// }



// for (let i = 0; i < closeCardBtn.length; i += 1) {
//   closeCardBtn[i].addEventListener('click', () => {
//     workCard.classList.toggle('invisible');
//     body1.style.overflow = 'auto';
//   });
// }