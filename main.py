def drow():
    led.plot(x, y)
    basic.pause(200)
    led.unplot(x, y)
y = 0
x = 0
x = 0
y = 0
for index in range(100):
    if x == 0:
        y += 1
        drow()
    if y == 4:
        x += 1
        drow()
    if x == 4:
        y += -1
        drow()
    if y == 0:
        x += -1
        drow()