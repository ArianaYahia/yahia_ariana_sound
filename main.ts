while (true) {
    if (input.soundLevel()) {
        music.playMelody("E F G F F E C5 F E B B G A F", 120)
        light.setAll(light.rgb(255, 255, 255))
    } else {
        music.stopAllSounds()
    }
    
}
