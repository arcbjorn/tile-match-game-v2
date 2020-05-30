export const tileIcons = ['ambulance', 'anchor', 'baby-carriage', 'bath', 'bed', 'beer', 'bell', 'bicycle',
  'binoculars', 'bomb', 'book', 'bug', 'bus', 'camera', 'candy-cane', 'car',
  'cloud', 'drum', 'feather', 'guitar', 'headphones', 'heart', 'helicopter', 'key',
  'lightbulb', 'lock', 'moon', 'rocket', 'tv', 'umbrella', 'star', 'wrench'];

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getValue = (values) => {
  const rand = getRandomInt(0, values.length - 1);
  return values[rand];
};
