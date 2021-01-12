while (true) {
    if (input.soundLevel() > 150) {
        music.magicWand.loop()
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
