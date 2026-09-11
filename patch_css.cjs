const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const newVars = `
  --bg-deep: #081C15;
  --bg-deep-rgb: 8, 28, 21;
  --bg-mid: #0D2318;
  --bg-mid-rgb: 13, 35, 24;
  --bg-darker: #050F0A;
  --text-main: #F7F4EF;
  --text-main-rgb: 240, 237, 230;
  --overlay-rgb: 255, 255, 255;
`;

const lightTheme = `
[data-theme='light'] {
  --bg-deep: #F7F4EF;
  --bg-deep-rgb: 247, 244, 239;
  --bg-mid: #EDE8DF;
  --bg-mid-rgb: 237, 232, 223;
  --bg-darker: #E5DFC5;
  --text-main: #081C15;
  --text-main-rgb: 8, 28, 21;
  --overlay-rgb: 0, 0, 0;
  --bg-surface: #ffffff;
  --gold-dim: rgba(212, 175, 55, 0.25);
}

[data-theme='light'] .glass-dark {
  background: rgba(247, 244, 239, 0.85);
}

[data-theme='light'] .btn-gold {
  color: #F7F4EF;
}

[data-theme='light'] .btn-outline-gold:hover {
  color: #F7F4EF;
}

[data-theme='light'] .luxury-input {
  background: rgba(0, 0, 0, 0.02);
  color: var(--text-main);
}

[data-theme='light'] .luxury-input::placeholder {
  color: rgba(8, 28, 21, 0.5);
}

[data-theme='light'] .announcement-bar {
  background: linear-gradient(90deg, #F7F4EF, #EDE8DF, #F7F4EF);
}

[data-theme='light'] .card-hover:hover {
  box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 0 30px rgba(212,175,55,0.15);
}
`;

css = css.replace(':root {', ':root {' + newVars);
css = css + '\n' + lightTheme;

fs.writeFileSync('src/index.css', css);
