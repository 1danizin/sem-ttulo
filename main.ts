input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.pause(randint(2000, 9000))
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (Tocar == 0) {
        _2 += 1
        basic.showLeds(`
            . . # # #
            . . # . #
            # # # # #
            # # . . #
            # # . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Tocar == 0) {
        _1 += 1
        basic.showLeds(`
            # # # . #
            # . # . .
            # # # . #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let Tocar = 0
let _1 = 0
let _2 = 0
basic.forever(function () {
	
})
basic.forever(function () {
	
})
