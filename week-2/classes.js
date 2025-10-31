
// object class
let rect={
    widht:2,
    height:3,
    area:function(){
        return rect.widht*rect.height;
    }
}



//custom class
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    area(){
        return this.width*this.height;
    }

    perimeter(){
        return 2*(this.width+this.height);
    }

}



const rect1=new Rectangle(2,3);
console.log("widht is "+rect1.width);
console.log("height is "+rect1.height);
console.log("area is "+rect1.area());
console.log("perimeter is:"+rect1.perimeter());