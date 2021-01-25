const words = [
  'sulky',
  'spot',
  'stir',
  'macho',
  'brick',
  'defiant',
  'adaptable',
  'terrible',
  'substance',
  'spooky',
  'fierce',
  'sneeze',
];
const numbers = [1, 2, 3, 4, 5, 10, 20, 15, 12, 13, 14];
const timespans = ['days', 'months'];

type Details = {
  hashtag: string;
  time: string;
};

export const useRandomDetails = (): Details => {
  const hashtag = words[Math.floor(Math.random() * words.length)];
  const length = numbers[Math.floor(Math.random() * numbers.length)];
  const timespan = timespans[Math.floor(Math.random() * timespans.length)];
  const time = `${length} ${timespan} ago`;

  return {
    hashtag,
    time,
  };
};
