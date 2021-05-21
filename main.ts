namespace SpriteKind {
    export const rice = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (joe.vy == 0) {
        joe.vy = -150
        scene.cameraShake(4, 100)
    }
})
let joe: Sprite = null
tiles.setTilemap(tilemap`level2`)
scene.setBackgroundImage(assets.image`myImage0`)
joe = sprites.create(assets.image`jeff`, SpriteKind.Player)
joe.setPosition(6, 120)
controller.moveSprite(joe, 100, 0)
joe.ay = 300
scene.cameraFollowSprite(joe)
info.setScore(0)
