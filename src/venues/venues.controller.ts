import { Controller, Post, Get, Body } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  createVenue(@Body() body) {
    return this.venuesService.createVenue(body.name, body.description);
  }

  @Get()
  getVenues() {
    return this.venuesService.getVenues();
  }
}
