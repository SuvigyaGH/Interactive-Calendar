/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
 const shuffle = (a: any[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export type HatchType = {
  nr: number;
  img: string;
  text: string;
  open: boolean;
}

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray: HatchType[] = [
  {
    nr: 1,
    img: './img/1.jpg',
    text:
      'Can I have your picture so I can show Santa what I want for Christmas?',
    open: false
  },
  {
    nr: 2,
    img: './img/2.jpg',
    text:
      'What do you call people who are afraid of Santa Claus? Claustrophobic',
    open: false
  },
  {
    nr: 3,
    img: './img/3.jpg',
    text:
      "What is the best Christmas present ever? A broken drum - you can't beat it!",
    open: false
  },
  {
    nr: 4,
    img: './img/4.jpg',
    text:
      "How do you know when Santa's in the room? You can sense his presents.",
    open: false
  },
  {
    nr: 5,
    img: './img/5.jpg',
    text: 'STRESSED is just DESSERTS spelled backward.',
    open: false
  },
  {
    nr: 6,
    img: './img/6.jpg',
    text: 'What is the difference between snowmen and snowwomen? Snowballs.',
    open: false
  },
  {
    nr: 7,
    img: './img/7.jpg',
    text: 'What nationality is Santa Claus? North Polish',
    open: false
  },
  {
    nr: 8,
    img: './img/8.jpg',
    text: 'What kind of motorbike does Santa ride? A Holly Davidson!',
    open: false
  },
  {
    nr: 9,
    img: './img/9.jpg',
    text: "Who is never hungry at Christmas? The turkey - he's always stuffed!",
    open: false
  },
  {
    nr: 10,
    img: './img/10.jpg',
    text:
      'When you stop believing in Santa Claus is when you start getting clothes for Christmas!',
    open: false
  },
  {
    nr: 11,
    img: './img/11.jpg',
    text: "What goes 'oh oh oh'? Santa walking backwards.",
    open: false
  },
  {
    nr: 12,
    img: './img/12.jpg',
    text:
      "According to my kids' Christmas lists, they think this parenting gig pays pretty well.",
    open: false
  },
  {
    nr: 13,
    img: './img/13.jpg',
    text:
      "Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",
    open: false
  },
  {
    nr: 14,
    img: './img/14.jpg',
    text:
      'What will fall on the lawn first? An autumn leaf or a Christmas catalog?',
    open: false
  },
  {
    nr: 15,
    img: './img/15.jpg',
    text: 'What do elves learn in school? The Elf-abet!',
    open: false
  },
  {
    nr: 16,
    img: './img/16.jpg',
    text: 'How do you scare a snowman? You get a hairdryer!',
    open: false
  },
  {
    nr: 17,
    img: './img/17.jpg',
    text:
      "The main thing I want this holiday season is for someone to wake me when it's over.",
    open: false
  },
  {
    nr: 18,
    img: './img/18.jpg',
    text:
      'Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.',
    open: false
  },
  {
    nr: 19,
    img: './img/19.jpg',
    text:
      "I bought my son a fridge for Christmas. – I can't wait to see his face light up when he opens it.",
    open: false
  },
  {
    nr: 20,
    img: './img/20.jpg',
    text: "Santa's elves are just a bunch of subordinate Clauses.",
    open: false
  },
  {
    nr: 21,
    img: './img/21.jpg',
    text:
      'What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.',
    open: false
  },
  {
    nr: 22,
    img: './img/22.jpg',
    text:
      'Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.',
    open: false
  },
  {
    nr: 23,
    img: './img/23.jpg',
    text:
      'What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!',
    open: false
  },
  {
    nr: 24,
    img: './img/24.jpg',
    text:
      "What's red and white, red and white, red and white? Sant rolling off your roof.",
    open: false
  }
];

export const createCalendar = (): HatchType[] => shuffle(hatchArray);
