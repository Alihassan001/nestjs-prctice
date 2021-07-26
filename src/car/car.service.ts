import { Injectable, HttpException } from '@nestjs/common';
import { CARS } from './cars.mock'

@Injectable()
export class CarService {
    private cars = CARS

    public getCars() {
        return this.cars;
    }

    public postCar(car) {
        return this.cars.push(car)
    }

    public getCarById(id: number): Promise<any> {
        const carId = Number(id)

        return new Promise((resolve) => {
            const car = this.cars.find(val => val.id === carId)
            if(!car) {
                throw new HttpException('not found!', 404)
            }
            return resolve(car);
        })
    }

    public deleteCarById(id: number): Promise<any> {
        const cardId = Number(id)
        return new Promise((resolve) => {
            const ind = this.cars.findIndex(val => val.id === cardId)
            if(!ind) {
                throw new HttpException('not found!', 404)
            }
            this.cars.splice(ind, 1);
            return resolve(this.cars);
        })
    }

    public putCarById(id: number, propName: string, propVal: string): Promise<any> {
        const cardId = Number(id)

        return new Promise((resolve) => {
            const ind = this.cars.findIndex(val => val.id === cardId)
            if(ind === -1) {
                throw new HttpException('not found!', 404)
            }
            this.cars[ind][propName] = propVal
            return resolve(this.cars);
        })
    }
}
