import { animate, utils, stagger, splitText } from 'animejs';

const colors = [];

splitText('p', {
  lines: true,
})

/* Registering a callback to the split */
.addEffect(split => {
  split.words.forEach(($el, i) => {
    const color = colors[i];
    if (color) utils.set($el, { color });
    $el.addEventListener('pointerenter', () => {
      animate($el, {
        color: utils.randomPick(['#FF4B4B', '#FFCC2A', '#B7FF54', '#57F695']),
        duration: 250,
      })
    });
  });
  return () => {
    /* Called between each split */
    split.words.forEach((w, i) => colors[i] = utils.get(w, 'color'));
  }
});