while (true) {
    console.log(input.soundLevel() + input.lightLevel())
    if (input.soundLevel() > 20 + input.lightLevel() && 20 + input.lightLevel() > 10) {
        music.wawawawaa.loop()
        music.setVolume(20)
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
