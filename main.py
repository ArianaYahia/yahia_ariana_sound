while True:
    print(input.sound_level() +  input.light_level())
    if input.sound_level() + input.light_level(): 
        music.wawawawaa.loop() 
        light.set_all(light.rgb(255, 255, 255))
        music.set_volume(20)


