function drow () {
    led.plot(x, y)
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    led.unplot(x, y)
}
input.onButtonPressed(Button.A, function () {
    start()
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
function start () {
    for (let index = 0; index < randint(0, 50); index++) {
        if (x == 0) {
            drow()
            y += 1
        }
        if (y == 4) {
            drow()
            x += 1
        }
        if (x == 4) {
            drow()
            y += -1
        }
        if (y == 0) {
            drow()
            x += -1
        }
    }
    led.plot(x, y)
}
let y = 0
let x = 0
x = 0
y = 0
basic.forever(function () {
	
})
