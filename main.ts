while (true) {
    if (input.soundLevel() > 20) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
