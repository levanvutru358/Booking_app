import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  venueId: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ default: 'pending' })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
