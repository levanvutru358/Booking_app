import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './booking.schema';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
  ) {}

  async createBooking(
    userId: string,
    venueId: string,
    date: string,
    time: string,
  ) {
    const newBooking = new this.bookingModel({
      userId,
      venueId,
      date,
      time,
      status: 'pending',
    });
    return newBooking.save();
  }

  async getBookings() {
    return this.bookingModel.find();
  }

  async cancelBooking(id: string) {
    return this.bookingModel.findByIdAndDelete(id);
  }
}
