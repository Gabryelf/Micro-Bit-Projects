input.onButtonPressed(Button.A, function () {
    count = 0
    count = randint(1, 6)
    if (count == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (count == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    }
    if (count == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    }
    if (count == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (count == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (count == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    count = 0
    count = randint(1, 6)
    if (count == 1) {
        basic.showNumber(1)
    }
    if (count == 2) {
        basic.showNumber(2)
    }
    if (count == 3) {
        basic.showNumber(3)
    }
    if (count == 4) {
        basic.showNumber(3)
    }
    if (count == 4) {
        basic.showNumber(4)
    }
    if (count == 4) {
        basic.showNumber(5)
    }
    if (count == 5) {
        basic.showNumber(5)
    }
    if (count == 6) {
        basic.showNumber(6)
    }
})
let count = 0
basic.clearScreen()
count = 0
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (count == 0) {
        basic.clearScreen()
    }
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
})
