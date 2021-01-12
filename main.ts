while (true) {
    console.log(input.soundLevel() + input.lightLevel())
    if (input.soundLevel() + input.lightLevel()) {
        music.wawawawaa.loop()
        light.setAll(light.rgb(255, 255, 255))
        music.setVolume(20)
    }
    
}
