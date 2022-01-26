/**
 * Game cheat code
 * Function that launches alert when user types a secret code
 * @param {String} codeWord secret word
 */
const cheatCode = (codeWord) => {
  let keyHistory = [];
  document.addEventListener('keyup', event => {
    keyHistory.push(event.key);
    if (keyHistory.join('') === codeWord) {
      keyHistory = [];
      alert('You typed a secret code!');
    }
  });
};

cheatCode('hello');

/**
 * Mouse double-click
 * Function that shows x and y coordinates when doubleclicking the document
 */
const doubleClick = () => {
  document.addEventListener('dblclick', event => {
    let x = event.clientX;
    let y = event.clientY;
    let coor = 'x coords: ' + x + ', y coords: ' + y;
    console.log(coor);
  });
};

doubleClick();

/**
 * Event that shows message, when touching the div
 */
document.querySelector('#hoverMe').addEventListener('mouseover', event => {
  console.log('You touched the div!');
});

/**
 * Custom event that tells user to "hurry up" after 15 secs of browsing
 */
document.addEventListener('hurryUpBrowsing', event => {
  document.querySelector('#browsingHurry').textContent = event.detail.msg;
});

const browsingEvent = new CustomEvent('hurryUpBrowsing', { detail: { msg: 'Hurry up, keep on browsing!' } });
setInterval(() => {
  document.dispatchEvent(browsingEvent);
}, 15000);


/**
 * Function that tells user to "hurry up" after 15 secs of idling
 */
const idleHurryUp = () => {
  let timeout;
  document.addEventListener('mousemove', event => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.querySelector('#idlingHurry').textContent = 'Hurry up!!!';
    }, 15000);
    document.querySelector('#idlingHurry').textContent = ' ';
  });
};

idleHurryUp();



