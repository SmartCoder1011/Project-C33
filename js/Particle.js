class particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        this.array=[];
        

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        var positionY = this.body.position.y;
        
        if(positionY>505){
        var positionX=this.body.position.x;
        }
        if(positionX!==undefined){
        var positions = [positionX,positionY];
        this.array.push(positions)
        }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
 
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
       if(this.array[0]!==undefined){
        //console.log(this.array[0][0]);
        if(this.array[0][0]>0&&this.array[0][0]<80&&scoreState1==="1"){
            scoreState1="1";
            if(scoreState1==="1"){
            score=score+500;
            scoreState1="2";
            }
        }
        if(this.array[0][0]>80&&this.array[0][0]<160&&scoreState2==="1"){
            scoreState2="1";
            if(scoreState2==="1"){
            score=score+400;
            scoreState2="2";
            }
        }
        if(this.array[0][0]>160&&this.array[0][0]<240&&scoreState3==="1"){
            scoreState3="1";
            if(scoreState3==="1"){
            score=score+300;
            scoreState3="2";
            }
        }
        if(this.array[0][0]>240&&this.array[0][0]<320&&scoreState4==="1"){
            scoreState4="1";
            if(scoreState4==="1"){
            score=score+200;
            scoreState4="2";
            }
        }
        if(this.array[0][0]>320&&this.array[0][0]<400&&scoreState5==="1"){
            scoreState5="1";
            if(scoreState5==="1"){
            score=score+100;
            scoreState5="2";
            }
        }
        if(this.array[0][0]>400&&this.array[0][0]<480&&scoreState6==="1"){
            scoreState6="1";
            if(scoreState6==="1"){
            score=score+100;
            scoreState6="2";
            }
        }
        if(this.array[0][0]>480&&this.array[0][0]<560&&scoreState7==="1"){
            scoreState7="1";
            if(scoreState7==="1"){
            score=score+200;
            scoreState7="2";
            }
        }
        if(this.array[0][0]>560&&this.array[0][0]<640&&scoreState8==="1"){
            scoreState8="1";
            if(scoreState8==="1"){
            score=score+300;
            scoreState8="2";
            }
        }
        if(this.array[0][0]>640&&this.array[0][0]<720&&scoreState9==="1"){
            scoreState9="1";
            if(scoreState9==="1"){
            score=score+400;
            scoreState9="2";
            }
        }
        if(this.array[0][0]>720&&this.array[0][0]<800&&scoreState10==="1"){
            scoreState10="1";
            if(scoreState10==="1"){
            score=score+500;
            scoreState10="2";
            }
        }
       }
        
       
    }

};