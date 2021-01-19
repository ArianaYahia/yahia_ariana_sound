if input.sound_level()>10:
    music.set_volume(20)
    music.play_melody("E        Db B  A  Ab E   F#    E  E E     E       E    Db    B   A       Ab    E     F#  E E", 120)
else:
    music.stop_all_sounds()