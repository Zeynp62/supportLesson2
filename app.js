//object literal notation
const music = {
    currentTrack: 'Just Ken',
    volume: 70,
    //including func in the object, this way it directly from the object there is a way from the dot notation too!
    // mute() {
    //     music.volume = 0;
    //   },
};

console.log(music); 
console.log(typeof music); //object

//Access values in an object
//dot notation
console.log(music.currentTrack);

//Dot notation is also used for adding new property
music.currentPlaylist = ['Just Ken', 'hey hey', 'what was I made for'];

console.log(music);
console.log(music.currentPlaylist);

//update the property with dot notation 
music.volume = 10;
console.log('volume updated: ',music.volume);

//deleting object's property
// delete music.currentPlaylist;
console.log(music);

music.mute = function () {
    music.volume = 0;
};

music.mute();
console.log(music);

console.log('after using the mute function: ',music.volume);

music.trackIdx = 0;//ading new key
music.next = function() {
    music.trackIdx +=1;
}

console.log(music);

console.log(music.currentPlaylist[music.trackIdx]);
music.next();
console.log(music.currentPlaylist[music.trackIdx]);
music.next();
console.log(music.currentPlaylist[music.trackIdx]);
music.currentTrack = music.currentPlaylist[music.trackIdx];

console.log('last print : ->',music.currentTrack);

// music.currentPlaylist= [
//     {
//         title: 'Just Ken',
//         artist: 'ryan gosling',
//         album: 'barbie',
//         length: '3:12'
//     },
//     {
//         title: 'Hey hey',
//         artist: 'Dominic Fike',
//         album: 'Barbie The Album',
//         length: '2:21',
//       }, {
//         title: 'What Was I Made For',
//         artist: 'Billie Eilish',
//         album: 'Barbie The Album',
//         length: '3:42',
//       }, {
//         title: 'Dance The Night',
//         artist: 'Dua Lipa',
//         album: 'Barbie The Album',
//         length: '2:56',
//       }
// ]

//for arrays FOR EACH LOOP


console.log(music);