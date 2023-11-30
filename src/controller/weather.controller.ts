import { Controller, Get, Query } from '@midwayjs/core';

@Controller('/')
export class WeatherController {
  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<string> {
    return cityId;
  }
}
