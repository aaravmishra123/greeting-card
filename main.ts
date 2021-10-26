let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(145, 57)
let sprite2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
sprite2.setPosition(9, 57)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddd55555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddddddddddddddd5555555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddd555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddddddddddddd555555555555555dd5555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddd555555ddd55555ddd5555555dd555dd5555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddd555555555d5555dd5dd555555d555dddd5555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddd555555555dd555d5555dd55555d55dd55d55555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddd5555d5555dd555dd555dd55555d555555d555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddddddddddd4444dddddddddddddd55dddd555dd55555555dd55555d555555d5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddddddddd44555544dddddddddddd55555dd555dd5555555d555555ddd555dd5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddddd4444444dd4444444dddd555dd5555d55555ddddddddd5555555dddddd55555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddd455555d4444d555554dd55555ddd5dd55555555ddddd5555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddcc4d55555555555555d4cc555555dddd55555555555555555555555555555555555555d5555ddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddcc22445555555555554422cc55555555555555555555555555555555555555555555555555555555ddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddcc2222222222222222222222cc555555555555555555555555555555555555555555555555555555dddddddddddddd55555ddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddcc222442222222242222224422cc555555555555555555555555555555555555555555555555555555555555555ddd5555555dddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddac22244222242222422222224222ca55555555555555555555555555555555555555555555555555555ddddddddddd55555555dddddddddddddddddddddddddddd
    dddddddddddddddddd4444dddddddda2224422224422224222242224222adddddd5555ddddd555555555555555ddddddddddddddddddddddddddddddddd5555ddd55dd555ddddddddddddddddddddddd
    dddddddddddddddd44555544dddddaa2244222224222224222244222422aadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dd5d55d555555ddddddddddddddddddddd
    dddddddddddd4444444dd4444444da222442222442222242222242224222ad11111111111111111111111111111111111111111111111ddddddddddd553d5555dd55dd555d55dddddddddddddddddddd
    ddddddddddd455555d4444d555554a224422222442222242222242224222a1111111111111111111111111111111111111111111111111111ddddd55553dddddd5555ddddd555ddddddddddddddddddd
    dddddddddcc4d55555555555555d4cc24422222422222242222244224422a111133333331111111111111111111111111111111111dddddddddddd5555355ddd55555555555555dddddddddddddddddd
    ddddddddcc22445555555555554422cc4422222422222242222244224422a11131111111311111111111111111111111111111ddddddddd5555555555335555555555555555555555555555ddddddddd
    dddddddcc2222222222222222222222cc422224422222242222244224422a11331111111311111111111111111111111111111111111dddddddd5555533555555555555555555555555555555ddddddd
    ddddddcc222442222222242222224422cc22224422222242222244224422a1133111111131111113133311111111111111111111111111111111ddddd3dddddddddddddddddddddddddddddddddddddd
    dddddac22244222242222522222225422ca2224422222242222244224422a1133111111131111111311133333333311111111111111111111111111113111111133ddddddddddddddddddddddddddddd
    ddddda2224522224422225222242245222a2224422222242222244224422a1133111111131111111311111111111111111111311333111111111111113111111133111dddddddddddddddddddddddddd
    ddddaa2245422224222225222244225422aa22442222224222224422422a1113311111113111111131111111111111111111131111333311111111111311111133111111dddddddddddddddddddddddd
    dddda222552222442222252222242255222a22442222224222224424422a11133111111131111111311111111111111111113111111111111111111113111111331111111ddddddddddddddddddddddd
    dddda224542222442222252222242245222a2224222224422222422422c1111313333333111111111313333111111111111131111111111111111111131111133311111111dddddddddddddddddddddd
    dddda224522222422222252222244225422a222422222442222442422c111113331111111111111113311133333111111111311111111111111111113131113331111111111ddddddddddddddddddddd
    dddda224522222422222252222244225422a4422422224222224444cc11111131331111111111111131111111111111111113111111111111111111131311331111111111111dddddddddddddddddddd
    dddda224422224422222252222244224422acc22242244222244cccc1111111311331111111111111311111111111111111131113311111111111111313333311111113111111ddddddddddddddddddd
    dddda224422224422222242222244224422ac1cccccccccccccc11111111111311113311111111111311111111111111111133333333333333111111311111311111131311111ddddddddddddddddddd
    dddda224422224422222242222244224422a11114444555d4111111111111113111113311111111113111111111111111111333111111111111111113111113111113113111111dddddddddddddddddd
    dddda224422224422222242222244224422a1111144444441111111111111113111111133111111113111111111111111111311111111111111111131111113111113113311111dddddddddddddddddd
    ddddda2244222442222224222224422422a111111144444111111111111111131111111133111111113333333333331111113111111111111111111311111131111311333111111ddddddddddddddddd
    ddddda2244222442222224222224424422a11111114d5d4111111111111111131111111111111111111111111111111111113111111111111111111311111131111333313111111ddddddddddddddddd
    ddddddc22442224222224422222422422c1111111145554111111111111111131111111111111111111111111111111111113111111111111111111111111131113311113111111ddddddddddddddddd
    dddddddc244222422222442222442422c1111111114d5d41111111111111111111111111111111111111111111111111111113113333331131111111111111111131111131111111dddddddddddddddd
    ddddddddcc44422422224222224444cc1111111111433341111111111111111111111111111111111111111111111111111113331111113311111111111111111131111113111111dddddddddddddddd
    dddddddddcccc22242244222244cccc111111111114d4d41111111111111111111111111111111111111111111111111111111111111111111111111111111111131111113111111dddddddddddddddd
    dddddddddddd1cccccccccccccc1111111111111114d4d411111111113111111111111111111111111133333111111111333311111111113333331111111111113311111131111111ddddddddddddddd
    dddddddddddd1114444555d41111111111111111114d3d411111111113111111111111111111111333311111111111133311131111111331111131111111111111111111131111111ddddddddddddddd
    dddddddddddd1111444444411111111111111111114ddd411111111113111111111111333331111311111111111113311111113111111311111111111111111111111111111111111ddddddddddddddd
    dddddddddddd1111144444111111111111111111114555411111111113111111111111111331111311111111111113111111113311111311111111111111111111111111111111111ddddddddddddddd
    dddddddddddd111114d5d41111111111111111111145554111111111133111111111111113111131111111111111131111111113111113111111111111111111111111111111111111dddddddddddddd
    ddddddddddd111111455541111111111111111111145d54111111111113111111111111113111131133331111111131111111113111113111111111111111111111111111111111111dddddddddddddd
    ddddddddddd1111114d5d41111111111111111111145d54111111111113111133111111113111133331111111111131111111113311113111111111111111111111111111111111111dddddddddddddd
    ddddddddddd111111133341111111111111111111145d54111111111113111311311111131111131111111111111131111111111311113111111111111111111111111111111111111dddddddddddddd
    ddddddddddd1111111d4d41111111111111111111145d541111111111131113113311111311111311111111111111311111111113111133111111111111111111111111111111111111ddddddddddddd
    ddddddddddd1111111d4d411111111111111111111454541111111111131113111311113111111311111111111111311111111113111113333111111111111111111111111111111111ddddddddddddd
    ddddddddddd1111114d3d411111111111111111111454541111111111113131111331131111111311111111111111311111111133111111113311111111111111111111111111111111ddddddddddddd
    ddddddddddd1111114ddd411111111111111111111454541111111111113311111133331111111333333333331111313111133311111111111131111111111111111111111111111111ddddddddddddd
    ddddddddddd1111114555411111111111111111111454d41111111111111111111113111111111111111111111111113333331111111111111131111111111111111111111111111111ddddddddddddd
    ddddddddddd1111114555411111111111111111111444d41111111111111111111111111111111111111111111111111111111111111111111133111111111111111111111111111111ddddddddddddd
    ddddddddddd11111145d5411111111111111111111111441111111111111111111111111111111111111111111111111111111111111111111113111111111111111111111111111111ddddddddddddd
    ddddddddddd11111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111131111331111111111111111111111111111111dddddddddddd
    ddddddddddd11111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113333311111111111111111111111111111111dddddddddddd
    ddddddddddd11111145d54111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111133dddddddddddd
    ddddddddddd11111145454111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111133dddddddddddd
    ddddddddddd11111145454111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111131dddddddddddd
    ddddddddddd11111145454111111111111111111111111111111111111111111111111111111131111111111111111111111111111111111111111111111111111111111111111111131dddddddddddd
    ddddddddddd111111454d4111111111111111111111111111111111111111111111111111111311111111111111111111111111111111111111111111333111111111111111111111131dddddddddddd
    ddddddddddd111111444d4111111111111111111111111111111111111111111111111111111311111111111111111111111111111111111111111113313111111111111111111111131dddddddddddd
    ddddddddddd11111111144111111111111111111111111111111111111111111111111111111311111111111111111111111111111111111111111113113111111111111111111111131dddddddddddd
    dddddddddddd1111111111111111111111111111111111111111111111111111111111111111311111113311111111111111111111111111111111131111311111111111111111111131dddddddddddd
    dddddddddddd1111111111111111111111111111111111111111111111111111111111111111311111131311111111111111111111111111111111311111311111111111111111111131dddddddddddd
    dddddddddddd1111111111111111111111111111111111111111111111111111111111111113311111133111111111111111111111111111111113111111311111111111111111111331dddddddddddd
    dddddddddddd1111111113311111111111111111111111111111131111111111133111111113311111133111111111111113111111111111111131111133111111111111111111111331dddddddddddd
    dddddddddddd1111111133311111111111111111111111111111331111111111133111111113311111133111111111111113111111111111111333333331111111131111111111111331dddddddddddd
    ddddddddddddd111131311131111111331111111111111111111331111111111133111111133111111131111111111111113111133111111111331111111111111131113311111111331d3dddddddddd
    ddddddddddddd111113111133111111313311111111111311111331133111311131111111313111111331111111111111113111131111111113311111113133111331331131111111331d3ddd3dddddd
    ddddddddddddd111113111113111111133333333111331311113311311311311131111113113111133313333111113311113111131111111113311111131333111333111113111133331d3dd33dddddd
    ddddddddddddd111113111113111111111311113111313311113313111313311131111131113111131313113311331311133111131111111113311111133113111313111113111333313d3dd3d3ddddd
    ddddddddddddd11111311111311111111131111311133333333333311133331133111131111311133133111131131131113331131111111111331111111111331333111111311131331333dd3d3ddddd
    dddddddddddddd111131111133111111133111311111111111113111111113333333331111113333113311113113133111313333111111111131111111111113311111111133333113133333333ddddd
    dddddddddddddd1111311111131111113111133111111111111331111111111111111111111111111331111131131333131111111111111113311111111111111111111111131131311ddddd333ddddd
    dddddddddddddd1111311111131111113111131111111111111111111111111111111111111111111331111111113313331111111111111113111111111111111111111111111113311ddddddd3ddddd
    dddddddddddddd1111331111331113331111111111111111111111111111111111111111111111111331111111111111111111111111111133111111111111111111111111111111111ddddddd3ddddd
    dddddddddddddd1111131133333333111111111111111111111111111111111111111111111111111311111111111111111111111111111111111111111111111111111111111111111ddddd333ddddd
    ddddddddddddddd111131111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111133333333331111111111111111111111ddd33dd3ddddd
    ddddddddddddddd11113111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113333d5555555d4441111111111111111111dd3ddd3dddddd
    ddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113335555dddddd555553311111111111111111d3dddd3dddddd
    ddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113555ddddd55555dddd55541111111111111111d3dddd3dddddd
    dddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111355dd555d5555555d55dd5d4111111111111111d3ddd3ddddddd
    dddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113d5d55555d555ddddd555dd5411111111111111dd3ddd3ddddddd
    dddddddddddddddd11111111111111111111111111111111111111111111dddddddd11111111111111111111111111111111111111135dd55555d3dddd3dd5555d5541111111111111dd3ddd3ddddddd
    ddddddddddddddddd11111111111111111111111111111111111111111ddd5555555dd1111111111111111111111111111111111113d5dd5555d3dddddd3d5555d5541111111111111dd3dd3dddddddd
    dddddddddddddddddd111111111111111111111111111111111111111dd5555555555dd11111111111111111111111111111111111455ddddddd33dddd33d555dd5541111111111111dd3dd3dddddddd
    dddddddddddddddddd11111111111111111111111111111111111111dd555555555555dd1111111111111111111111111111111111455dd555555333333ddddddd55b1111111111111dd3333dddddddd
    ddddddddddddddddddd1111ddddddd11111111111111111111111111dd55555555555ddddd11111111111111111111111111111111455dd55555555d55555555dd5bb113333333333ddddddddddddddd
    ddddddddddddddddddddddddddddddddd1111111111111111111111ddd555ddd5555dd555ddd1111111111111111111111111111114d55ddd5555ddd5555555dd55b3333d5555555d444dddddddddddd
    ddddddddddddddddddddddd55555555ddd11111111111111111111dddd555d5dd555d555555dd111111111111111111111111111114455555dddddddd55555dd553335555dddddd5555533dddddddddd
    dddddddddddddddddddd5555555555555dd111111111111111ddddddddd555ddd555d5555555dd11111111111111111111111111111b4d555555555ddddddd5553555ddddd55555dddd5554ddddddddd
    ddddddddddddddddddd555555555555555dd11ddddddd11dddd5555555dddddd5555d5555555ddd1111111111111111111111111111b34dddd5555555555555d355dd555d5555555d55dd5d4dddddddd
    dddddddddddddddddd555555dd555555555ddd555555ddddd5555555555555555555d555d555ddddd111111111111111111111111113333333333ddddddddd53d5d55555d555ddddd555dd54dddddddd
    ddddddddddddddddd555555ddddd555555ddd555555555ddddddddddd55555555555dd55dd55d5555ddd111111111111111111113333d5555555d444555d55535dd55555d3dddd3dd5555d554ddddddd
    ddddddddddddddddd55555dd55ddd55555ddd5555555555ddddddddddd55555555555dddd555555555ddd111111111111111113335555dddddd5555533d5553d5dd5555d3dddddd3d5555d554ddddddd
    dddddddddddddddd555555dd555dd55555dd5555ddd5555dddddddddddd555555555555555555555555dddd111111111111113555ddddd55555dddd5554ddd455ddddddd33dddd33d555dd554ddddddd
    dddddddddddddddd555555dddd5dd55555dd555ddddd555dd5555dddddd55555555555555555555555ddd55ddddddddddddd355dd555d5555555d55dd5d4dd455dd555555333333ddddddd55bddddddd
    ddddddddd55555dd5555555dd55dd55555dd555555dd5555555555ddddd555555555555555555555555555555dddddddddd3d5d55555d555ddddd555dd54d3455dd55555555d55555555dd5bbddddddd
    dddddddd5555555dd555555555dd5555555dd55555dd55555555555dddd555555555555555555555555555555dddddddddd35dd55555d3dddd3dd5555d554e4d55ddd5555ddd5555555dd55bbddddddd
    ddddddd55555555dddd55555ddd555555555ddddddd555555d55555dddd555555555555555555555555555555555555ddd3d5dd5555d3dddddd3d5555d554d4455555dddddddd55555dd55d3bddddddd
    ddddddd5555ddd555ddddddddd555555555555dddd55555555d5555ddddddddddddddddddddddddddddddddddddddddddd455ddddddd33dddd33d555dd554ddb4d555555555ddddddd555d33bddddddd
    ddddddd555ddddd55555ddd555555555555555555555555555dd55dddddddddddddddddddddddddddddddddddddddddddd455dd555555333333ddddddd55bddb34dddd5555555555555dd533bddddddd
    ddddddd555d55dd555555555555555ddd555555555555555555dddd55555dddddddddddddddddddddddddddddddddddddd455dd55555555d55555555dd5bbdde3355dddddddddddddd5d55b3bddddddd
    dddddddd55555dd5555555555555dddddd555555555555555555dd555555dddddddddddddddddddddddddddddddddddddd4d55ddd5555ddd5555555dd55bbdde33d55d5555dd555d555333b3bddddddd
    dddddd5dd555dd5555555555555dd555ddd55555555555555555555555555555dddddddddddddddddddddddddddddddddd4455555dddddddd55555dd55d3bddde3ddd3d553d555d555d333bb3ddddddd
    dddddd55ddddd55555555555555d55555555555555555555555555555555555555dddddddddddddddddddddddddddddddddb4d555555555ddddddd555d33bddde43dd3ddd3dddd3ddddb3bbddddddddd
    dddddd555555555555555555555d55555555555555555555555555555555555555555555555ddddddddddddddddddddddddb34dddd5555555555555dd533bddde444b3ddd44ddd3ddd3bbb3ddddddddd
    ddddddd55555555555555555555ddddd55555555555555555555555555555555555555ddddddddddddddddddddddddddddde3355dddddddddddddd5d55b3bdddd444bbdddb4ddd4dd3ee3ddddddddddd
    ddddddddd55555555555555555555ddddddddddddddddddddd555555ddddddddddddddddddddddddddddddddddddddddddde33d55d5555dd555d555333b3bddddddd4e33dbbdd4444eeddddddddddddd
    `)
effects.hearts.startScreenEffect(5000)
effects.confetti.startScreenEffect(5000)
music.playMelody("C D E F G A B C5 ", 120)
music.setVolume(82)
