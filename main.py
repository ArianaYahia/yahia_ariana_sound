while True:
    print(input.sound_level() +input.light_level())
    if input.light_level()> 5 + input.sound_level()>100:
        music.wawawawaa.loop()
        light.set_pixel_color(0,light.rgb(255,255,255))
    else:
        music.stop_all_sounds()
        light.clear()