input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showNumber(randint(1, 7))
    azar = randint(1, 5)
    for (let index = 0; index < azar; index++) {
        music.playTone(randint(131, 988), music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(randint(131, 988), music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(randint(131, 988), music.beat(BeatFraction.Eighth))
    }
})
let azar = 0
basic.showLeds(`
    . . # # .
    . . # . #
    . . # . .
    . # # . .
    . # # . .
    `)
music.setVolume(255)
basic.forever(function () {
	
})
