import dbConnect from '../libs/basededatos';
import Counter from '../models/Contador';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const counter = await Counter.findOne();
    return NextResponse.json({ count: counter ? counter.count : 0 });
  } catch (error) {
    console.error('Error fetching counters:', error);
    return NextResponse.json({ message: 'Error fetching counters' });
  }
};

export async function POST() {
    try {
        console.log('river');
        await dbConnect();
        console.log('boca');
        const counter = await Counter.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true, upsert: true });
        return NextResponse.json({ count: counter.count });
    }
    catch(error){
        console.error('Error posting counters:', error);
        return NextResponse.json({ message: 'Error posting counters' });
    }
}