basic.forever(function () {
    for (let index = 0; index < 1000; index++) {
        if (input.buttonIsPressed(Button.A)) {
            while (input.buttonIsPressed(Button.A)) {
                basic.pause(500)
                basic.showLeds(`
                    # # # # #
                    . . . . .
                    # # # # #
                    . . . . .
                    # # # # #
                    `)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
                basic.showLeds(`
                    . . . . .
                    # # # # #
                    . . . . .
                    # # # # #
                    . . . . .
                    `)
                basic.pause(500)
                basic.clearScreen()
                basic.pause(500)
            }
        } else {
            if (input.buttonIsPressed(Button.B)) {
                while (input.buttonIsPressed(Button.B)) {
                    basic.pause(500)
                    basic.showLeds(`
                        # . # . #
                        # . # . #
                        # . # . #
                        # . # . #
                        # . # . #
                        `)
                    basic.pause(200)
                    basic.clearScreen()
                    basic.pause(500)
                    basic.showLeds(`
                        . # . # .
                        . # . # .
                        . # . # .
                        . # . # .
                        . # . # .
                        `)
                    basic.pause(200)
                    basic.clearScreen()
                    basic.pause(500)
                }
            } else {
                basic.clearScreen()
            }
        }
    }
})
