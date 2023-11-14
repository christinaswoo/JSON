let dawgsGallery = document.getElementById('dawgsGallery');

let jsonDatabase = [
  {
    "image": "IMG_7661.jpeg",
    "name": "DAWGLILA",
    "mood": "SUPER happy 😆",
    "color": "#990000"
  },
  {
    "image": "IMG_9190.JPG",
    "name": "DAWGKOTA",
    "mood": "sleepy after staring out the window 💤",
    "color": "#CC6600"
  },
  {
    "image": "IMG_3274.jpeg",
    "name": "DAWGLILA",
    "mood": "like she's Kenough 🫶",
    "color": "#D4D449"
  },
  {
    "image": "IMG_9356.jpg",
    "name": "DAWGLILA",
    "mood": "cute and wanting some attention 😍",
    "color": "#4C9900"
  },
  {
    "image": "IMG_4777.JPG",
    "name": "DAWGKOTA",
    "mood": "excited for the dog park 😛",
    "color": "#009900"
  },
  {
    "image": "IMG_4302.jpeg",
    "name": "DAWGKOTA",
    "mood": "sooo comfy in bed 🛌",
    "color": "#00994C"
  },
  {
    "image": "IMG_7468.JPG",
    "name": "DAWGLILA",
    "mood": "protective of her stick 🫡",
    "color": "#009999"
  },
  {
    "image": "IMG_3617.JPG",
    "name": "DAWGKOTA",
    "mood": "like dancing 🕺",
    "color": "#004C99"
  },
  {
    "image": "IMG_5446.JPG",
    "name": "DAWGKOTA",
    "mood": "like doing some laundry 🧺",
    "color": "#000099"
  },
  {
    "image": "IMG_8174.JPG",
    "name": "DAWGLILA",
    "mood": "like a hot dog ☀️",
    "color": "#4C0099"
  },
  {
    "image": "IMG_4360.jpeg",
    "name": "DAWGKOTA",
    "mood": "ready for school 🎒",
    "color": "#990099"
  },
  {
    "image": "IMG_4356.jpeg",
    "name": "DAWGLILA",
    "mood": "ready for school too! 📖",
    "color": "#99004C"

  },
  {
    "image": "IMG_8421.jpeg",
    "name": "DAWGLILA and DAWGKOTA",
    "mood": "like its a little too bright out 🕶️",
    "color": "#660033"
  },
  {
    "image": "IMG_3446.JPG",
    "name": "DAWGKOTA and DAWGLILA",
    "mood": "extra lucky 🧧",
    "color": "#660066"
  },
  {
    "image": "IMG_4879.jpeg",
    "name": "DAWGKOTA and DAWGLILA",
    "mood": "loved 🥰",
    "color": "#330066"
  },
  {
    "image": "IMG_3883.JPG",
    "name": "DAWGLILA and DAWGKOTA",
    "mood": "held against their will! Help them! 😧",
    "color": "#000066"
  },
  {
    "image": "lp_image.JPG",
    "name": "DAWGLILA",
    "mood": "hungry. Don't touch her bone! 🦴",
    "color": "#003366"
  },
  {
    "image": "IMG_1372.JPG",
    "name": "DAWGLILA",
    "mood": "itty bitty like a baby 👼",
    "color": "#006666"
  },
  {
    "image": "IMG_8696.jpg",
    "name": "DAWGKOTA",
    "mood": "a little carsick 🤤",
    "color": "#006633"
  },
  {
    "image": "lp_image1.jpeg",
    "name": "DAWGKOTA",
    "mood": "like he needs a treat. Time for the puppy eyes 🥺",
    "color": "#006600"
  }  
];



document.addEventListener('DOMContentLoaded', function() {
  for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
  }
});


function createElementProper(incomingJSON) {
  let newBox = document.createElement("DIV");
  newBox.classList.add("newBox");
  newBox.style.backgroundColor = incomingJSON["color"];

  let newImage = document.createElement("IMG");
  newImage.classList.add("doggy");
  newImage.src = incomingJSON["image"];

  // Create a separate anchor for Fancybox
  let newImageFancybox = document.createElement("A");
  newImageFancybox.href = incomingJSON["image"];
  newImageFancybox.setAttribute("data-fancybox", "gallery");
  newImageFancybox.appendChild(newImage);

  newBox.appendChild(newImageFancybox);

  let galleryInfo = document.createElement("DIV");
  galleryInfo.classList.add("galleryInfo");

  let newName = document.createElement("P");
  newName.classList.add("nameClass");
  newName.innerText = incomingJSON["name"];
  galleryInfo.appendChild(newName);

  let newMood = document.createElement("P");
  newMood.classList.add("moodClass");
  newMood.innerText = "feeling... " + incomingJSON["mood"];
  galleryInfo.appendChild(newMood);

  newBox.appendChild(galleryInfo);
  dawgsGallery.appendChild(newBox);
}






















// document.addEventListener('DOMContentLoaded', function (event) {
//   for (let i = 0; i < jsonDatabase.length; i++) {
//     createGallery(jsonDatabase[i]);
//   }
// });

// function createGallery(dawg) {
//   let galleryBox = document.createElement('DIV');
//   galleryBox.classList.add('galleryBox');

//   let galleryLink = document.createElement('A');
//   galleryLink.setAttribute('data-fancybox', 'gallery');
//   galleryLink.setAttribute('data-width', '700');
//   galleryLink.setAttribute('data-height', '700');

//   let galleryImage = document.createElement('IMG');
//   galleryImage.classList.add('galleryImage'); 
//   galleryImage.setAttribute('src', dawg.image);
//   galleryImage.setAttribute('alt', dawg.name);

//   galleryLink.appendChild(galleryImage);
//   galleryBox.appendChild(galleryLink);

//   let galleryInfo = document.createElement('DIV');
//   galleryInfo.classList.add('galleryInfo');

//   let newName = document.createElement('P');
//   newName.classList.add('nameClass');
//   newName.innerText = dawg.name;
//   galleryInfo.appendChild(newName);

//   let newMood = document.createElement('P');
//   newMood.innerText = "feeling... " + dawg.mood;
//   newMood.classList.add('moodClass');
//   galleryInfo.appendChild(newMood);

//   galleryBox.style.backgroundColor = dawg.color;

//   galleryBox.appendChild(galleryInfo);

//   dawgsGallery.appendChild(galleryBox);


// //stopping the images from disappearing after exiting lightbox
//   galleryLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     $.fancybox.open({ src: dawg.image, type: 'image' });
//   });
// }