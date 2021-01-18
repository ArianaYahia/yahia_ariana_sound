while (true) {
    console.log(input.soundLevel() + input.lightLevel())
    if (input.lightLevel() > 5 + input.soundLevel() && 5 + input.soundLevel() > 150) {
        music.wawawawaa.loop()
        light.setPixelColor(0, light.rgb(255, 255, 255))
    } else {
        music.stopAllSounds()
    }
    
}
