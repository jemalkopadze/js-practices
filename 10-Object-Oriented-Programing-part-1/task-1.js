function CoffeeMachine(power) {


    let timerId;

	this.waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var self = this;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
		console.log('Coffee is ready');
	}
	
    this.run = function() {
		setTimeout(onReady, getBoilTime());
    };
    this.stop = function (){
        if (timerId) {
            clearTimeout(timerId);
            timerId = void 0;
            console.log('Coffe is not read');
        }
        else{
             throw new Error('Coffe making don\'t start');
         }
    }
}


var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready
