local clhock = 0
function onCreatePost()
initLuaShader("TvGlitch");
initLuaShader("bloom");
makeLuaSprite("temporaryShader");
makeGraphic("temporaryShader", screenWidth, screenHeight);
setSpriteShader("temporaryShader", "TvGlitch");

makeLuaSprite("bloom");
makeGraphic("bloom", screenWidth, screenHeight);
setSpriteShader("bloom", "bloom");

addHaxeLibrary("ShaderFilter", "openfl.filters");
runHaxeCode([[
game.camGame.setFilters([new ShaderFilter(game.getLuaObject("bloom").shader)]);
]]);
makeLuaText('redText', '', 1000, 0, 0)
addLuaText('redText')
setTextSize('redText', 60)
setTextFont('redText', 'glamor.otf')
setTextBorder('redText', 0, '000000')
setTextColor('redText', 'FF0000')
screenCenter('redText', 'X')
screenCenter('redText', 'Y')
setProperty('redText.antialiasing', true)
end
function onUpdate(elapsed)
    setShaderFloat("temporaryShader", "iTime", os.clock()-clhock)
end
function onStepHit()
	if curStep == 344 then
	setTextString("redText", "DIE")
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("temporaryShader").shader)]);
    ]]);
    
	end
	if curStep == 352 then
	setTextString("redText", "")
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("bloom").shader)]);
    ]]);
	end
	if curStep == 376 then
	setTextString("redText", ":)")
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("temporaryShader").shader)]);
    ]]);
	end
	if curStep == 381 then
	setSpriteShader("temporaryShader", "sorting");
    removeLuaText('redText', false)
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("bloom").shader)]);
    ]]);
	end
	if curStep == 693 then
	clhock = os.clock()
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("temporaryShader").shader)]);
    ]]);
	end
	if curStep == 704 then
	triggerEvent('Play Animation','nene','dad')
	triggerEvent('Flash','2','000000')
	clhock = 0
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("bloom").shader)]);
    ]]);
    setSpriteShader("temporaryShader", "Drunk");
	end
	if curStep == 1344 then
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("temporaryShader").shader)]);
    ]]);
    end
	if curStep == 1600 then
	runHaxeCode([[
	game.camGame.setFilters([new ShaderFilter(game.getLuaObject("bloom").shader)]);
    ]]);
	removeLuaSprite('temporaryShader', false)
	end
end