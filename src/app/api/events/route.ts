import { NextResponse } from "next/server";
import { mockEvents } from "../../../lib/mockEvents";

export async function GET() {
    try {
        return NextResponse.json({ events: mockEvents });
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch events" },
            { status: 500 }
        );
    }
}