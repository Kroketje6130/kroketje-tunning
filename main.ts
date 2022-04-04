input.onButtonPressed(Button.A, function () {
    ruimteschip.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    mijn_kogel = game.createSprite(ruimteschip.get(LedSpriteProperty.X), 3)
})
input.onButtonPressed(Button.B, function () {
    ruimteschip.change(LedSpriteProperty.X, 1)
})
let mijn_kogel: game.LedSprite = null
let ruimteschip: game.LedSprite = null
radio.setGroup(7)
ruimteschip = game.createSprite(2, 4)
