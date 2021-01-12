while (true) {
    console.log(input.soundLevel() + input.lightLevel())
    if (input.soundLevel() > 10 + input.lightLevel() && 10 + input.lightLevel() > 10) {
        music.wawawawaa.play()
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
