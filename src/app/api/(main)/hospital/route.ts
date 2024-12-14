"use server"
import { NextRequest, NextResponse } from 'next/server';
import {hospitalform} from "@/components/atoms/cotrollers/hosptial";

export const POST=async(req:NextRequest)=>{
  try {
    return await hospitalform(req);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Message not allowed',error}, { status: 405 });
  }
}
