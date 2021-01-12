while True:
    print(input.sound_level() +  input.light_level())
    if input.sound_level() > 10 + input.light_level() > 10: 
        music.wawawawaa.play() 
        light.set_all(light.rgb(255, 255, 255))


