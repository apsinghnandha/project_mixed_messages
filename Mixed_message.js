const when = ['Today is', 'Yesterday was', 'Tomorrow is'];
const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const climate = ['& climate is hot', '& climate is cold', '& climate is humid', '& climate is dry'];

const random = (array) => Math.floor(Math.random() * array.length);

const message = () => {
  let messageVar = [];

  messageVar.push(when[random(when)]);
  messageVar.push(day[random(day)]);
  messageVar.push(climate[random(climate)]);
  return messageVar;
};

console.log(
  `%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
  'font-family:monospace'
);
console.log(message().join(' '));
