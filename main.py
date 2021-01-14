while True:
    if input.sound_level()> 150:
        light.set_all(light.rgb(255, 255, 255)) 
    else:
        light.clear()




