while True:
    print(input.sound_level() +  input.light_level())
    if input.sound_level()> 20 + input.light_level() > 10: 
        music.wawawawaa.loop() 
        music.set_volume(20)
        light.set_all(light.rgb(255, 255, 255))


