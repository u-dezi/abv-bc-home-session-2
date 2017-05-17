let name;
let model;
let kilometersPerHourCar = 50;
let kilometersPerHourTrailer = 11;
let speed;
let  isSaloon;
let baseSpeed = '0km/h';
    
    /*
      it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.speed).toBe('0 km/h');
      man.drive(7);
      expect(man.speed).toBe('77 km/h');
    });
    */

function Car(name,model,type){
  this.numOfWheels =4;
  this.isSaloon = false;
  this.numOfDoors = 4;
  this.speed = '0 km/h';
  
  if(arguments.length === 3){			
		  this.name =name;
		  this.model = model;
		  this.type = type;
		  
		  if(type === 'trailer')
		  {
		    this.numOfWheels = 8;
		  }
		  
		  if(name.toLowerCase() === 'porshe' || name.toLowerCase() === 'koenigsegg')
		  {
			this.numOfDoors = 2;
		  	this.isSaloon = true;
		  }
		 
		}
	if(arguments.length === 2){			
		  this.name =name;
		  this.model = model;
		  this.numOfDoors = 4;
		  
		  if(name.toLowerCase() === 'porshe' || name.toLowerCase() === 'koenigsegg')
		  {
			this.numOfDoors = 2;
		  }
		  if( name.toLowerCase() === 'koenigsegg')
		  {
			  this.isSaloon = true;
		  }
		  
		}
	if(arguments.length === 0){			
		this.name ='General';
		this.model = 'GM';
		this.numOfDoors = 4;
		console.log("I am 0");
		console.log(this.model);
		}
	if(arguments.length === 1){			
		this.name = name;
		
		if(name === 'Porshe' || name === 'Koenigsegg')
		{
			this.numOfDoors = 2;
		}
		
		}
}




Car.prototype = {
    constructor: Car,
    drive:function (gear_no)  {
      
      
      let currentSpeed = gear_no * kilometersPerHourCar;
      this.speed = currentSpeed + " km/h";
      
      if(this.type === 'trailer')
      {
        let currentSpeed = gear_no * kilometersPerHourTrailer;
        this.speed = currentSpeed + " km/h";
      }
      
      return speed;  
        //this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    }
}