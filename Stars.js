function Star() {
  this.x = randomGaussian(0,width/5);
  this.y = randomGaussian(0,height/5);
	this.z = random(dist(0,0,width/2,height/2));
	this.dr = map(this.x*this.y,0,width/2*height/2,1.012,1.001);
	this.r =map(width*height,266454,1722240,3,1) ;
	this.speed = map(width*height,266454,1722240,2,3) ;
	this.selectAsteroid = random();
	
  this.update = function() {
		this.z = this.z - this.speed;
		this.r = this.r * this.dr;
		
		
		if (this.z < 1) {
			this.x = randomGaussian(0,width/5);
  		this.y = randomGaussian(0,height/5);
			this.z = random(dist(0,0,width/2,height/2));
			this.dr = map(this.x*this.y,0,width/2*height/2,1.012,1.001);
			this.r =map(width*height,266454,1722240,3.5,2) ; // For better display in mobile phones
			this.speed = map(width*height,266454,1722240,2,3) ;
 		}
	}

  this.show = function() {
		var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
		
		
		
		
		push();
		if (this.selectAsteroid < 0.2) {
			image(asteroid1, sx, sy, this.r, this.r);
		} else if (this.selectAsteroid >= 0.2 && this.selectAsteroid < 0.4) {
			image(asteroid2, sx, sy, this.r, this.r);
		} else if (this.selectAsteroid >= 0.4 && this.selectAsteroid < 0.6) {
			image(asteroid3, sx, sy, this.r, this.r);
		} else if (this.selectAsteroid >= 0.6 && this.selectAsteroid < 0.8) {
			image(asteroid4, sx, sy, this.r, this.r);
		} else {
			image(asteroid5, sx, sy, this.r, this.r);
		}
		pop();
	}
}