namespace SpriteKind {
    export const arch = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 500)
})
// fix this akjfal;jfkja;jf
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.x += 25
    if (otherSprite.x == 42) {
        otherSprite.x += 25
    } else if (otherSprite.x == 117) {
        otherSprite.x += -25
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position == 1) {
        position = 0
        mySprite.x += -25
    } else if (position == 2) {
        position = 1
        mySprite.x += -25
    } else if (position == 3) {
        position = 2
        mySprite.x += -25
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (position == 0) {
        position = 1
        mySprite.x += 25
    } else if (position == 1) {
        position = 2
        mySprite.x += 25
    } else if (position == 2) {
        position = 3
        mySprite.x += 25
    }
})
let barrel: Sprite = null
let enemy_position = 0
let mySprite: Sprite = null
let position = 0
let arch = sprites.create(img`
    c c c c c c c c c c c c c c c 
    f f f f f f f f f f f f f f f 
    c c c 3 c c c c c 3 c c c c f 
    c 3 c . . . . . . . . c c 3 f 
    c c c c . . . . . . c c 3 c f 
    c f c c . . . . . . c c c c f 
    3 c c . . . . . . . . c c c f 
    c 3 c . . . . . . . . c c c f 
    c c c . . . . . . . . c c 3 f 
    f c c . . . . . . . . c c f f 
    f c c . . . . . . . . 3 c f f 
    c c c . . . . . . . . c c c f 
    c 3 c . . . . . . . . . c 3 f 
    3 c c . . . . . . . . c c c f 
    `, SpriteKind.arch)
position = 1
scene.setBackgroundImage(img`
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999998999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999888888999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999899999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999989999999999
    9999989999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999989999999999
    9999998899999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999988999999999
    9999999989999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999889999999999
    9999999998889999999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999988999999999999
    9999999999989999999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999988899999999999999
    9999999999998899999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999988889899999999999
    9999999999999989999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998899999999999999999
    9999999999999998899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999889999999999999999999
    9999999999999999988999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999998999999999999999999999
    9999999999999999999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999899999999999999988999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999988999999999999999899999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999989999999999999
    9999999899999999999999988999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999989999999999999
    9999999988999999999989999899991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999899999999989999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999988999999989999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999889999899999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999998999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999889999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999998999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999889999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999889999999
    9999999999999999999998999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999888999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999888999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999988999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999988899999999999999999
    9999989999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999988899999999999999999999
    9999998999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199998899999999999999999999999
    9999999899999999899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999989999999899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999899999999
    9999999998999998999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999998999999999
    9999999999899989999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999989999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999998999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999889899999999999999999
    9999999999999899999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999988999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999888999999899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999989999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999998999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999989999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999998999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999899999999999999
    9999999999999999999999899999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999998999999999999999
    9999999999999999999999989999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999998999999999
    9999999999999999999999998999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999989999998999999999
    9998999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999899999998999999999
    9999889999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999998999999999999999999
    9999998899999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999989999999999999999999
    9999999988999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999889999999999999999999
    9999999899889999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999998989999999999999999999
    9999999989998899999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999989989999999999999999999
    9999999998899988999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999989999999999999999999999
    9999999999989999889999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999899999999899999999999999
    9999999999998999998899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199998999999999989999999999999
    9999999999999999999988999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199989999999999989999999999999
    9999999999999999999999889999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199899999999999998999999999999
    9999999999999999999999998999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999998999999999999
    9999999899999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999998999899999999
    9999999988999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999899899999999
    9999999999889999999998999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999899989999999
    9999999999998899999998999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999989999999999
    9999999999999989999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999999989999999999
    9999999999999998899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999899989999989999999999
    9999999999999999988999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999899989999998999999999
    9999999999999999999889999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999899989999998999999999
    9999999999999999999998999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999899989999999899999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999899989999999899999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999999899999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999999989999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999999988999999
    9999999999999999999989999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999998999999
    9999999999999999999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999998999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999989999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999899999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999989999998999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999998899989999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999989899999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999899999999899999999
    9999999999988999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999998999999999899999999
    9999999999899889999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999998999999998999999999
    9999999998999998999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999998999999999999999999
    9999999989999999899999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999998999999999999999999
    9999999899999999988999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998899999999999999999
    9999998999999999999899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998899999999999999999
    9999989999999999999989999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998899999999999999999
    9999899999999999999998899999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998899999999999999999
    9998999999999999999999989999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999989989999999999999999
    9989999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999989999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999989999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999899999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999889999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999998899999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999998999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999989999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999989999999999999
    9999999998899999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999889999999999999
    9999999999988999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999999889999999999999
    9999999999999889999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999998999999999999999
    9999999999999998889999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999998999999999999999
    9999999998999999998899999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999999999999999
    9999999999888889999988999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999989999999999999999
    9999999999999999999999889999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999998999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999999899999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999998999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb199999999989999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999989999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999899999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    9999999999999999999999999999991bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb199999999999999999999999999999
    `)
mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(67, 60)
scroller.scrollBackgroundWithSpeed(0, 50)
animation.runImageAnimation(
mySprite,
[img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f e e e e e e f e f 
    f f f f e e e e f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 f b b b b b b f 4 e 
    4 d f d d d d d d c d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f e e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f e e e e e e e f e f 
    f f f e e e e f f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    . 4 f b b b b b f e 4 e 
    . 4 f d d d d d e d d 4 
    . e f f f f f f e e 4 . 
    . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . 
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f e e e e e e e f f . 
    f f e f e e e e e e f f 
    f f f e e e e e e e e f 
    f f f f e e e e e f e f 
    f f f f f e e e e f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    . f f f f f f f f f f . 
    . e f f f f f f f f e . 
    e 4 e f b b b b b f 4 . 
    4 d d e d d d d d f 4 . 
    . 4 e e f f f f f f e . 
    . . . . . . . f f f . . 
    `],
200,
true
)
forever(function () {
    for (let index = 0; index < randint(2, 3); index++) {
        enemy_position = randint(0, 3)
        if (enemy_position == 0) {
            barrel = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . c . . c . . . . . . 
                . . d d b b b b b b b b b c . . 
                . . b b b b b b b b b b b b c . 
                . . b b b b b c b b c b b b c . 
                . d b b b d d c d d c d d b c . 
                . d b b b d d c b b c b b b c . 
                . b c c b c c c c c c c c c c . 
                . b c c c c c c c c c c c c c . 
                . . c c c c c c c c c c c c c . 
                . . b c b c c c c c c c c c c . 
                . . . . . . c . . c . . . c . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            barrel.setPosition(42, -10)
            barrel.setVelocity(0, 50)
        } else if (enemy_position == 1) {
            barrel = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . c . . c . . . . . . 
                . . d d b b b b b b b b b c . . 
                . . b b b b b b b b b b b b c . 
                . . b b b b b c b b c b b b c . 
                . d b b b d d c d d c d d b c . 
                . d b b b d d c b b c b b b c . 
                . b c c b c c c c c c c c c c . 
                . b c c c c c c c c c c c c c . 
                . . c c c c c c c c c c c c c . 
                . . b c b c c c c c c c c c c . 
                . . . . . . c . . c . . . c . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            barrel.setPosition(67, -10)
            barrel.setVelocity(0, 50)
        } else if (enemy_position == 2) {
            barrel = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . c . . c . . . . . . 
                . . d d b b b b b b b b b c . . 
                . . b b b b b b b b b b b b c . 
                . . b b b b b c b b c b b b c . 
                . d b b b d d c d d c d d b c . 
                . d b b b d d c b b c b b b c . 
                . b c c b c c c c c c c c c c . 
                . b c c c c c c c c c c c c c . 
                . . c c c c c c c c c c c c c . 
                . . b c b c c c c c c c c c c . 
                . . . . . . c . . c . . . c . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            barrel.setPosition(92, -10)
            barrel.setVelocity(0, 50)
        } else if (enemy_position == 3) {
            barrel = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . c . . c . . . . . . 
                . . d d b b b b b b b b b c . . 
                . . b b b b b b b b b b b b c . 
                . . b b b b b c b b c b b b c . 
                . d b b b d d c d d c d d b c . 
                . d b b b d d c b b c b b b c . 
                . b c c b c c c c c c c c c c . 
                . b c c c c c c c c c c c c c . 
                . . c c c c c c c c c c c c c . 
                . . b c b c c c c c c c c c c . 
                . . . . . . c . . c . . . c . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            barrel.setPosition(117, -10)
            barrel.setVelocity(0, 50)
        }
    }
    pause(2000)
})
