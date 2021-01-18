while (true) {
    if (input.soundLevel() > 150) {
        light.setPixelColor(0, light.rgb(255, 100, 0))
        light.clear()
        light.setPixelColor(1, light.rgb(245, 255, 0))
        light.clear()
        light.setPixelColor(2, light.rgb(150, 245, 66))
        light.clear()
        light.setPixelColor(3, light.rgb(66, 245, 230))
        light.clear()
        light.setPixelColor(4, light.rgb(103, 181, 199))
        light.clear()
        light.setPixelColor(5, light.rgb(66, 188, 245))
        light.clear()
        light.setPixelColor(6, light.rgb(80, 123, 242))
        light.clear()
        light.setPixelColor(7, light.rgb(190, 95, 227))
        light.clear()
        light.setPixelColor(8, light.rgb(245, 66, 212))
        light.clear()
        light.setPixelColor(9, light.rgb(242, 48, 78))
        light.clear()
    } else {
        light.clear()
    }
    
}
