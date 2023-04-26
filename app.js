const dynamicspeakers = [
  {
    id: 1,
    url: 'asset/speakers/james.jpg',
    name: 'Faruq Mahfuz Anam',
    job: 'Bangladeshi singer-songwriter',
    desc: 'He is the lead singer, songwriter and guitarist of the rock band Nagar Baul. He is often referred by the name "Guru" which means "Master" or "Teacher".',
  },
  {
    id: 2,
    url: 'asset/speakers/fantty.jpg',
    name: 'Ahsan Elahi Fanty',
    job: 'Drummer-Nogor Baul',
    desc: 'Ahsan Elahi Fanty is the famous drummer of the rock band Nagar Baul. He started his fame as drummer from 1984 to present.',
  },
  {
    id: 3,
    url: 'asset/speakers/sultan.jpg',
    name: 'Sultan Raihan Khan',
    job: 'Guitarist at Nagarbaul',
    desc: 'Sultan Raihan Khan is the famous Guitar, Bass, Composer, Sound Engineer of the rock band Nagar Baul.',
  },
  {
    id: 4,
    url: 'asset/speakers/talukder.jpg',
    name: 'Talukdar Sabbir',
    job: 'Bass guitarist',
    desc: 'Talukdar Sabbir is a Bangladeshi artist who served as guiterist of the rock band Nagar Baul',
  },
  {
    id: 5,
    url: 'asset/speakers/kumr.jpg',
    name: 'Kumar Bishwajit',
    job: 'Bangladeshi singer and composer',
    desc: 'Kumar Bishwajit is a Bangladeshi singer and composer.',
  },
  {
    id: 6,
    url: 'asset/speakers/sumi.jpg',
    name: 'Nigar Sultana Sumi',
    job: 'Bangladeshi singer',
    desc: 'Lalon Band performed live concert at auditorium of SBMC, 2013, left to right: Iftekhar Hasan Bappy, Ashraf Ahmed Turjo, Nigar Sultana Sumi.',
  },
];

const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const menuLink = document.querySelectorAll('.menu-list__item');
const menucontainer = document.querySelector('.lower-nav__center');
const featuredSpeakers = document.getElementById('all-speakers');
const seeMore = document.querySelector('.feature-speakers__see-more');
const seeLess = document.querySelector('.feature-speakers__see-less');

openHam.addEventListener('click', () => {
  menucontainer.classList.toggle('hide');
  openHam.classList.add('hide');
  closeHam.classList.remove('hide');
});

closeHam.addEventListener('click', () => {
  menucontainer.classList.toggle('hide');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
});

menuLink.forEach((link) => link.addEventListener('click', () => {
  menucontainer.classList.add('hide');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
}));

const renderspeakers = function () {
  for (let i = 0; i < dynamicspeakers.length; i += 1) {
    featuredSpeakers.innerHTML += `
      <div class="feature-speakers__card" >
      <img src=${dynamicspeakers[i].url} alt=${dynamicspeakers[i].name} class="speaker-pix">
      <div class="feature-speakers__card-details">
          <h3 class="feature-speakers__card-details-name">${dynamicspeakers[i].name}</h3>
          <p class="feature-speakers__card-details-info">${dynamicspeakers[i].job}</p>
          <p class="feature-speakers__card-details-about">${dynamicspeakers[i].desc}</p>
      </div>
    </div>
            `;
  }
};

window.addEventListener('load', renderspeakers);

let currentItems = 2;

seeMore.addEventListener('click', () => {
  const speakersdata = [...document.querySelectorAll('.feature-speakers__card')];

  for (let i = currentItems; i < speakersdata.length; i += 1) {
    speakersdata[i].style.display = 'grid';
  }

  currentItems += 4;

  if (currentItems >= speakersdata.length) {
    seeMore.style.display = 'none';
    seeLess.classList.remove('hide');
  }
});

seeLess.addEventListener('click', () => {
  const speakersdata = [...document.querySelectorAll('.feature-speakers__card')];

  for (let i = 2; i < speakersdata.length; i += 1) {
    speakersdata[i].style.display = 'none';
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    seeMore.style.display = 'grid';
    seeLess.classList.add('hide');
  }
});