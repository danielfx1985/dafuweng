def drow():
    led.plot(x, y)
    basic.pause(100)
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    led.unplot(x, y)

def on_button_pressed_a():
    start()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    control.reset()
input.on_button_pressed(Button.B, on_button_pressed_b)

def start():
    global y, x
    for index in range(randint(0, 50)):
        if x == 0:
            drow()
            y += 1
        if y == 4:
            drow()
            x += 1
        if x == 4:
            drow()
            y += -1
        if y == 0:
            drow()
            x += -1
    led.plot(x, y)
y = 0
x = 0
x = 0
y = 0

def on_forever():
    pass
basic.forever(on_forever)
