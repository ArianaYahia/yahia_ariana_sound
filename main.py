while True:
    if input.sound_level()>5:
        music.set_volume(20)
        music.play_melody("E        Db B  A  Ab E   F#    E  E E     E       E    Db    B   A       Ab    E     F#  E E", 120)
    