if (input.soundLevel() > 10) {
    music.setVolume(20)
    music.playMelody("E        Db B  A  Ab E   F#    E  E E     E       E    Db    B   A       Ab    E     F#  E E", 120)
} else {
    music.stopAllSounds()
}

