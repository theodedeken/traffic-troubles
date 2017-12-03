import CarQueue from './structures/CarQueue.js';

export default class CarMoveSolver {
    static doCarMoves(network, cars){
        var carQueue = new CarQueue();
        cars.forEach(car => {
            carQueue.addCarMove(car, car.getNextZone());
        });
        var next = carQueue.getBestZone();
        while(next){
            //move car 
            var zone = next[0];
            var zoneCars = next[1];
            while (zone.hasFreeSpace()){
                var car = getFirstCar(zoneCars);
                var from = car.getZone();
                car.moveTo(zone);
                carQueue.moveCar(car, from, car.getZone());
            }
            next = carQueue.getBestZone();
        }

    }

    static getFirstCar(cars){
        var minId = -1;
        var minCar = null;
        cars.forEach(car => {
            if (!minCar || minId > car.id){
                minId =  car.id;
                minCar = car;
            }
        });
        return car;

    }
}