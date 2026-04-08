import { NextResponse } from "next/server";
import { mockEvents } from "../../../lib/mockEvents";

export async function GET() {
    return NextResponse.json({ events: mockEvents });
}