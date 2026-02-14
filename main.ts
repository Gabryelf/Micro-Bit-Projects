input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    count = randint(1, 7)
})
let count = 0
count = 0
basic.forever(function () {
    if (count == 1) {
        basic.showString("Yes")
    }
    if (count == 2) {
        basic.showString("No")
    }
    if (count == 3) {
        basic.showString("Most likely yes")
    }
    if (count == 4) {
        basic.showString("Most likely no")
    }
    if (count == 5) {
        basic.showString("Exactly yes")
    }
    if (count == 6) {
        basic.showString("Exactly no")
    }
    if (count == 7) {
        basic.showString("Not definitely")
    }
})
