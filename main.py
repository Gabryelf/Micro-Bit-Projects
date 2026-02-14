def on_button_pressed_a():
    global count
    count = 0
    count = randint(1, 6)
    if count == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    if count == 2:
        basic.show_leds("""
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            """)
    if count == 3:
        basic.show_leds("""
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            """)
    if count == 4:
        basic.show_leds("""
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            """)
    if count == 5:
        basic.show_leds("""
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            """)
    if count == 6:
        basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global count
    count = 0
    count = randint(1, 6)
    if count == 1:
        basic.show_number(1)
    if count == 2:
        basic.show_number(2)
    if count == 3:
        basic.show_number(3)
    if count == 4:
        basic.show_number(3)
    if count == 4:
        basic.show_number(4)
    if count == 4:
        basic.show_number(5)
    if count == 5:
        basic.show_number(5)
    if count == 6:
        basic.show_number(6)
input.on_button_pressed(Button.B, on_button_pressed_b)

count = 0
basic.clear_screen()
count = 0
basic.show_leds("""
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    """)

def on_forever():
    if count == 0:
        basic.clear_screen()
basic.forever(on_forever)
