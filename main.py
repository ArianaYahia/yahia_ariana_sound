while True:
    if input.sound_level()> 150:
        light.set_pixel_color(0, light.rgb(255,100,0))
        light.clear()
        light.set_pixel_color(1, light.rgb(245, 255, 0))
        light.clear()
        light.set_pixel_color(2, light.rgb(150, 245, 66))
        light.clear()
        light.set_pixel_color(3, light.rgb(66, 245, 230))
        light.clear()
        light.set_pixel_color(4, light.rgb(103,181,199))
        light.clear()
        light.set_pixel_color(5, light.rgb(66, 188, 245))
        light.clear()
        light.set_pixel_color(6, light.rgb(80,123,242))
        light.clear()
        light.set_pixel_color(7, light.rgb(190, 95, 227))
        light.clear()
        light.set_pixel_color(8, light.rgb(245,66,212))
        light.clear()
        light.set_pixel_color(9, light.rgb(242,48,78))
        light.clear()
    else:
        light.clear()




