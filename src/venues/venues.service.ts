import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue } from './venue.schema';

@Injectable()
export class VenuesService {
  constructor(@InjectModel(Venue.name) private venueModel: Model<Venue>) {}

  async createVenue(name: string, description: string) {
    const newVenue = new this.venueModel({ name, description });
    return newVenue.save();
  }

  async getVenues() {
    return this.venueModel.find();
  }
}
