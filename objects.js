var playlist = {artist1: "Ece"}

function updatePlaylist(playlist, artist2, song2){
  playlist[artist2] = song2
  return playlist
}

function removeFromPlaylist(playlist, artist2){
  delete playlist[artist2]
  return playlist
}