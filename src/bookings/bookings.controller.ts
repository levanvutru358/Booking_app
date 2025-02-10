import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  createBooking(@Body() body) {
    return this.bookingsService.createBooking(
      body.userId,
      body.venueId,
      body.date,
      body.time,
    );
  }

  @Get()
  getBookings() {
    return this.bookingsService.getBookings();
  }

  @Delete(':id')
  cancelBooking(@Param('id') id: string) {
    return this.bookingsService.cancelBooking(id);
  }
}
