export const input = {
    // width: 2166, height: 1650, fps: 30,
    width: 1000, height: 668, fps: 30,
    outPath: './finalVideo.mp4',
    defaults: {
      transition: { name: 'random' },
      layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    audioFilePath: './assets/ssmlvoice.wav',
    clips: [
      { duration: 3.8, transition: { name: 'directional-left' }, layers: [{ type: 'title-background', text: 'Presentation\nFlowers', background: { type: 'linear-gradient', colors: ['#02aab0', '#00cdac'] } }] },
      { duration: 4, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/sunflower.jpg', duration: 2.5, zoomDirection: 'in' }, { type: 'subtitle', text: ' This is the first image' }, { type: 'title', position: 'top', text: 'Sunflower' }] },
      { duration: 7, transition: { name: 'crosszoom', duration: 0.3 }, layers: [{ type: 'video', path: 'assets/videoplayback.mp4', cutFrom:10, cutTo:17}] },
      { duration: 3, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/roses.jpg', duration: 2.5, zoomDirection: 'in' }, { type: 'title', position: 'top', text: 'This is the second image ' }] },
      { duration: 4, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/flower.png', duration: 2.5, zoomDirection: 'in' }, { type: 'title', position: 'top', text: 'Thank you ' }] },

  
    ],
  };