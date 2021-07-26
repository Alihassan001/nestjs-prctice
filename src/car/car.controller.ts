import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common';
import { CarService } from './car.service'
import { CarDto } from './cars.dto'

@Controller('car')
export class CarController {
    constructor (private carService: CarService) {
        
    }

    @Get()
    public getCars() {
        return this.carService.getCars();
    }

    @Post()
    public postCars(@Body() car: CarDto) {
        return this.carService.postCar(car);
    }

    @Get(':id')
    public async getCarById(@Param('id') id: number) {
        return this.carService.getCarById(id);
    }

    @Delete(':id')
    public async deleteCarById(@Param() id: number) {
        return this.carService.deleteCarById(id);
    }

    @Put(':id')
    public async putCarById(@Param() id: number, @Query() query) {
        const name = query.propName;
        const val = query.propVal;
        return this.carService.putCarById(id, name, val);
    }
}
