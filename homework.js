const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false,
    },
  },
  {
    name: 'Rusty',
    present: false,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false,
    },
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false,
    },
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false,
    },
  },
];

const present = videoData.filter(function (value) {
  return value.present === true;
});

console.log('jumlah present true adalah', present.length);
console.log(present);
