namespace SpriteKind {
    export const othersprites = SpriteKind.create()
    export const hazard = SpriteKind.create()
    export const Tank = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.hazard, SpriteKind.Player, function (sprite, otherSprite) {
    info.setLife(0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Justin_half_Skelly_Form, 200, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Tank, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-20)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Justin_half_Skelly_Form, 200, 200)
})
info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Justin_half_Skelly_Form, 200, 200)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    info.changeLifeBy(-20)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Justin_half_Skelly_Form, 200, 200)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(20)
})
let Justin_half_Skelly_Form: Sprite = null
scene.setBackgroundImage(assets.image`OK`)
Justin_half_Skelly_Form = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . f f e e d d d d d d e e f . . 
    f c 1 f e e 4 4 4 4 e e f f f . 
    f 1 b 1 b c b f b f c 1 1 1 c f 
    f b f b f b f f f f 1 b 1 b 1 f 
    . . . . . f f f f f f f b f b f 
    . . . . . . f f f f f . . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
Justin_half_Skelly_Form.setStayInScreen(true)
info.setLife(80000)
info.setScore(0)
info.startCountdown(125)
controller.moveSprite(Justin_half_Skelly_Form)
story.printDialog("Skellies and cars are dangerous, mostly cars", 70, 30, 50, 150, 15)
story.printText("The apples that are at the corners are deadly", 70, 160, 15)
music.playMelody("C5 A G E D G B E ", 100)
let living_car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Tank)
living_car.setKind(SpriteKind.Enemy)
let Skellyin_nut = sprites.create(img`
    ..................fffff.................
    ................ff11111fff..............
    ................ff11111fff..............
    ..............ffb1111111bbf.............
    ..............ff1111111111f.............
    .............fdd1111111111df............
    .............fdd1111111111df............
    .............fdddd11111ddddf............
    .............fbbdbfdddfbddbf............
    .............fccdcf111fcddcf............
    ..............ffb1111111bbf.............
    ..............ffb1111111bbf.............
    .............ffffcdbb1bdfffff...........
    ...........fc1111cbffbfc1111c...........
    ...........f1b11b1fffff1bb1b1...........
    ...........fbfbbfffffffbffbfb...........
    .........b3455433333333334443333ae......
    ........b33322333dddd3333455233daee.....
    .......b3d333333dd3bbbb33322333dabe.....
    ......b3d333333d3bb33bb33333333da4e.....
    ......bd33333333b33aab3333333223a4ee....
    .....b3d3663333b33aab33366332442b4ee....
    .....bd3b983333a3aa3333387633ee3b4ee....
    .....bd6983333baaa333333387633bb4bee....
    ....b3d6833333bba333333333863ba44ebe....
    ....bdd3333333bb3333333333333a44bebe....
    ....add666633333322333366333ba44bbbe....
    ....ad67776333332442336983d3a444b4e.....
    ....add888b333333ee3369833d3a44b44e.....
    ....add333333333333336833d3a444b4e......
    ....a3dd3333344433333dddd3a444b44e..2...
    ....ab33ddd325543333dd33aa444b44e..2422.
    .....eabb3dd32233333baaa4444b44e.b245542
    .....ebabb3d333d33baa444443b44ebbb445552
    ......ebaab3ddd3aaa4444433b44ebbbb445542
    ......eebbaab33a44444333b444ebbbbb245542
    .......eeebbaab444b333b4444e.....b22422.
    ........ebeeebbbbbbbb4444ee.........2...
    .........eebbbb44444444ee...............
    ...........eeebbb444eee.................
    `, SpriteKind.Enemy)
Skellyin_nut.setPosition(138, 51)
living_car.follow(Justin_half_Skelly_Form, 25)
let inverted_poison_apple = sprites.create(img`
    . . . . . . . b c 7 . . . . . . 
    . . . . b b b c 7 7 b b . . . . 
    . . c b b b b c 7 e a a b b . . 
    . c b b b b b c 6 e e a a a b . 
    . c b b b a b c c a 8 7 8 a b . 
    c b b b a a a a a a 8 7 7 a a b 
    c b b a a a a a a a a 8 8 a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    . b b b a a a a a a a a a 8 b . 
    . a b b a a a a a a a a 8 a b . 
    . . a b b a a a a a 8 8 a b . . 
    . . . a a b b 8 8 8 a b b . . . 
    . . . . . a a b b b b . . . . . 
    `, SpriteKind.hazard)
inverted_poison_apple.setPosition(-5, 57)
let Inverted_poison_apple_2 = sprites.create(img`
    . . . . . . . b c 7 . . . . . . 
    . . . . b b b c 7 7 b b . . . . 
    . . c b b b b c 7 e a a b b . . 
    . c b b b b b c 6 e e a a a b . 
    . c b b b a b c c a 8 7 8 a b . 
    c b b b a a a a a a 8 7 7 a a b 
    c b b a a a a a a a a 8 8 a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    . b b b a a a a a a a a a 8 b . 
    . a b b a a a a a a a a 8 a b . 
    . . a b b a a a a a 8 8 a b . . 
    . . . a a b b 8 8 8 a b b . . . 
    . . . . . a a b b b b . . . . . 
    `, SpriteKind.hazard)
Inverted_poison_apple_2.setPosition(12, 103)
Skellyin_nut.follow(Justin_half_Skelly_Form, 100)
living_car.setPosition(13, 98)
let Inverted_poision_apple_3 = sprites.create(img`
    . . . . . . . b c 7 . . . . . . 
    . . . . b b b c 7 7 b b . . . . 
    . . c b b b b c 7 e a a b b . . 
    . c b b b b b c 6 e e a a a b . 
    . c b b b a b c c a 8 7 8 a b . 
    c b b b a a a a a a 8 7 7 a a b 
    c b b a a a a a a a a 8 8 a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    . b b b a a a a a a a a a 8 b . 
    . a b b a a a a a a a a 8 a b . 
    . . a b b a a a a a 8 8 a b . . 
    . . . a a b b 8 8 8 a b b . . . 
    . . . . . a a b b b b . . . . . 
    `, SpriteKind.hazard)
Inverted_poision_apple_3.setPosition(10, 10)
let Inverted_poision_apple_4 = sprites.create(img`
    . . . . . . . b c 7 . . . . . . 
    . . . . b b b c 7 7 b b . . . . 
    . . c b b b b c 7 e a a b b . . 
    . c b b b b b c 6 e e a a a b . 
    . c b b b a b c c a 8 7 8 a b . 
    c b b b a a a a a a 8 7 7 a a b 
    c b b a a a a a a a a 8 8 a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    . b b b a a a a a a a a a 8 b . 
    . a b b a a a a a a a a 8 a b . 
    . . a b b a a a a a 8 8 a b . . 
    . . . a a b b 8 8 8 a b b . . . 
    . . . . . a a b b b b . . . . . 
    `, SpriteKind.hazard)
let Inverted_poision_apple_5 = sprites.create(img`
    . . . . . . . b c 7 . . . . . . 
    . . . . b b b c 7 7 b b . . . . 
    . . c b b b b c 7 e a a b b . . 
    . c b b b b b c 6 e e a a a b . 
    . c b b b a b c c a 8 7 8 a b . 
    c b b b a a a a a a 8 7 7 a a b 
    c b b a a a a a a a a 8 8 a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    c b b a a a a a a a a a a a a b 
    . b b b a a a a a a a a a 8 b . 
    . a b b a a a a a a a a 8 a b . 
    . . a b b a a a a a 8 8 a b . . 
    . . . a a b b 8 8 8 a b b . . . 
    . . . . . a a b b b b . . . . . 
    `, SpriteKind.hazard)
Inverted_poision_apple_4.setPosition(142, 11)
Inverted_poision_apple_5.setPosition(142, 101)
let car_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
car_2.follow(Justin_half_Skelly_Form, 45)
let Skelly_in_nut_2 = sprites.create(img`
    ..................fffff.................
    ................ff11111fff..............
    ................ff11111fff..............
    ..............ffb1111111bbf.............
    ..............ff1111111111f.............
    .............fdd1111111111df............
    .............fdd1111111111df............
    .............fdddd11111ddddf............
    .............fbbdbfdddfbddbf............
    .............fccdcf111fcddcf............
    ..............ffb1111111bbf.............
    ..............ffb1111111bbf.............
    .............ffffcdbb1bdfffff...........
    ...........fc1111cbffbfc1111c...........
    ...........f1b11b1fffff1bb1b1...........
    ...........fbfbbfffffffbffbfb...........
    .........b3455433333333334443333ae......
    ........b33322333dddd3333455233daee.....
    .......b3d333333dd3bbbb33322333dabe.....
    ......b3d333333d3bb33bb33333333da4e.....
    ......bd33333333b33aab3333333223a4ee....
    .....b3d3663333b33aab33366332442b4ee....
    .....bd3b983333a3aa3333387633ee3b4ee....
    .....bd6983333baaa333333387633bb4bee....
    ....b3d6833333bba333333333863ba44ebe....
    ....bdd3333333bb3333333333333a44bebe....
    ....add666633333322333366333ba44bbbe....
    ....ad67776333332442336983d3a444b4e.....
    ....add888b333333ee3369833d3a44b44e.....
    ....add333333333333336833d3a444b4e......
    ....a3dd3333344433333dddd3a444b44e..2...
    ....ab33ddd325543333dd33aa444b44e..2422.
    .....eabb3dd32233333baaa4444b44e.b245542
    .....ebabb3d333d33baa444443b44ebbb445552
    ......ebaab3ddd3aaa4444433b44ebbbb445542
    ......eebbaab33a44444333b444ebbbbb245542
    .......eeebbaab444b333b4444e.....b22422.
    ........ebeeebbbbbbbb4444ee.........2...
    .........eebbbb44444444ee...............
    ...........eeebbb444eee.................
    `, SpriteKind.Enemy)
Skelly_in_nut_2.follow(Justin_half_Skelly_Form, 125)
Skelly_in_nut_2.setPosition(132, 55)
car_2.setPosition(16, 55)
let healthy_apple = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
