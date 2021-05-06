const editly = require('editly');

const input = {
    // width: 2166, height: 1650, fps: 30,
    width: 1000, height: 668, fps: 30,
    outPath: './finalVideo.m3u8',
    defaults: {
      transition: { name: 'random' },
      layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    audioFilePath: './assets/ssmlvoice.wav',
    keepSourceAudio:true,
    clips: [
      { duration: 3.8, transition: { name: 'directional-left' }, layers: [{ type: 'title-background', text: 'Presentation\nFlowers', background: { type: 'linear-gradient', colors: ['#02aab0', '#00cdac'] } }] },
      { duration: 4, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/sunflower.jpg', duration: 2.5, zoomDirection: 'in' }, { type: 'subtitle', text: ' This is the first image' }, { type: 'title', position: 'top', text: 'Sunflower' }] },
      { duration: 7, transition: { name: 'crosszoom', duration: 0.3 }, layers: [{ type: 'video', path: 'assets/videoplayback.mp4', cutFrom:10, cutTo:17, mixVolume:1}] },
      { duration: 5, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/roses.jpg', duration: 2.5, zoomDirection: 'in' }, { type: 'title', position: 'top', text: 'Roses' }] },
      { duration: 4, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/flower.jpg', duration: 2.5, zoomDirection: 'in' }, { type: 'title', position: 'top', text: 'Thank you ' }] },

    ],
  };
/*
const editSpec= {
    // width: 2166, height: 1650, fps: 30,
    width: 1000, height: 668, fps: 30,
    outPath: './finalVideo.mp4',
    // outPath: './commonFeatures.gif',
    audioFilePath: './assets/High [NCS Release] - JPB  (No Copyright Music)-R8ZRCXy5vhA.m4a',
    defaults: {
      transition: { name: 'random' },
      layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
    },
    clips: [
      { duration: 3, transition: { name: 'directional-left' }, layers: [{ type: 'title-background', text: 'Testing Video', background: { type: 'linear-gradient', colors: ['#02aab0', '#00cdac'] } }] },
      { duration: 3, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/img1.jpg', duration: 2.5, zoomDirection: 'in' }, { type: 'subtitle', text: ' This is the first image' }, { type: 'title', position: 'top', text: 'With text' }] },
      { duration: 1.5, transition: { name: 'crosszoom', duration: 0.3 }, layers: [{ type: 'video', path: 'assets/kohlipe1.mp4'}] },
      { duration: 10, transition: { name: 'crosszoom', duration: 0.3 }, layers: [{ type: 'video', path: 'assets/videoplayback.mp4', cutFrom:10, mixVolume:0}] },
      { transition: { name: 'fade' }, layers: [{ type: 'video', path: 'assets/kohlipe2.mp4', cutTo: 2.5 }] },
      { duration: 3, transition: { name: 'dreamyzoom' }, layers: [{ type: 'image', path: './assets/img2.png', duration: 2.5, zoomDirection: 'in' }, { type: 'title', position: 'top', text: 'This is the second image ' }] },
  
    ],
  }
  
*/
// See editSpec documentation
const func= async() => {
    await editly(input)
    .catch(console.error);
}
func();