while True:
    if input.sound_level():
        music.play_melody("E F G F F E C5 F E B B G A F", 120)
    else:
        music.stop_all_sounds() 