input.onButtonPressed(Button.A, function () {
    varken.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    varken.change(LedSpriteProperty.X, 1)
})
let varken: game.LedSprite = null
varken = game.createSprite(2, 4)
basic.forever(function () {
	
})
