var canvas =new fabric.Canvas("My_Canvas");
ctx= canvas.getContext("2d");

player_X=10;
player_Y=10;

block_img_width=30;
block_img_height=30;
var player_Object="";
 var block_img_object="";

function player_Update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_Object=Img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(150);
        player_Object.set({
            top:player_Y,
            left:player_X
        });
       canvas.add(player_Object);
    })
}

function new_Image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
       block_img_object=Img;
       block_img_object.scaleToWidth(block_img_width);
       block_img_object.scaleToHeight(block_img_height);
       block_img_object.set({
            top:player_Y,
            left:player_X
        });
       canvas.add(block_img_object);
    })
}