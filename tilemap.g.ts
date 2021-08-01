// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000102010705020101070102050b070114010103070104010b07040b0401070114010201070108080107060103040701140201060701080a0407010101010706140101010701090803070102040107011401020207080a080507010c0f11070114030401070101060207010d1012070214020101070101010407010d1012070114010501070104030607020e1013070514010201070108020b0701050406070114010101070808010507010108080703140103040708080201070601080807011401020107060803010701020808070214010101070108010107020208080705140101030702010208070101040807011401010207010101020701010104070114`, img`
. . . . 2 . . . . . . 2 2 . . . 
. . . . . 2 . 2 . 2 2 2 . . . . 
. . . . . . . . . 2 . . 2 . . . 
. . 2 . . . . 2 . . . . . . 2 . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . 2 . . 2 2 2 . . . 
. 2 . . . . 2 . . . 2 2 2 . . . 
. . . . . . . 2 . . 2 2 2 . . . 
. 2 . . . 2 . 2 . . 2 2 2 . 2 . 
. . . . . . . 2 . . 2 2 2 . . . 
. . . . . . . 2 . . . . . . . . 
. . 2 . . . . . . 2 . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.vehicle.roadVertical,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,myTiles.tile4,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.castle.tilePath4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
