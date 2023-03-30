function drow () {
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
}
input.onButtonPressed(Button.A, function () {
    start()
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
function start () {
    for (let index = 0; index < randint(16, 150); index++) {
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
let ax = [
0,
1,
2,
3,
4
]
let ay = [0, 4]
let by = [
0,
1,
2,
3,
4
]
let bx = [0, 4]
let cx = ax._pickRandom()
let cy = ay._pickRandom()
let dx = bx._pickRandom()
let dy = by._pickRandom()
basic.forever(function () {
	
})
basic.forever(function () {
    led.plot(cx, cy)
    led.plot(dx, dy)
})
