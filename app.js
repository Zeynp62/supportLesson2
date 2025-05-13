// const tv = {
//   model: 'Samsung',
//   size: 75,
// }


const music = {
  currentTrack: 'music number1',
  volume: 70,
  // mute() {
  //   music.volume=0
  // },
}

music.mute = function () {
  music.volume = 0
}

music.playList = ['music 5', 'music 7', 'last music']// create new key and value for the object music

// console.log(music);
music.volume = 8 //update for the volume key
music.mute()//to use the function

music.trackId = 0
console.log(music)

music.next = function () {
  music.trackId += 1 
}

console.log(music.playList[music.trackId]) //music.playList[0]

music.next() // trackId +1
console.log(music.playList[music.trackId])//music.playList[1]
music.next()//trackId +1
console.log(music.playList[music.trackId])//music.playList[2]

music.fav = 'house'
console.log(music);


