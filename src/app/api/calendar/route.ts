import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const calendar = google.calendar('v3');

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const accessToken = searchParams.get('accessToken');

  if (!accessToken) {
    return NextResponse.json(
      { error: 'Access token not provided' },
      { status: 400 }
    );
  }

  try {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const response = await calendar.events.list({
      auth: auth,
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return NextResponse.json(response.data.items);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar events' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { accessToken, event } = await request.json();

  if (!accessToken || !event) {
    return NextResponse.json(
      { error: 'Access token and event data required' },
      { status: 400 }
    );
  }

  try {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const response = await calendar.events.insert({
      auth: auth,
      calendarId: 'primary',
      requestBody: {
        summary: event.summary,
        description: event.description,
        start: {
          dateTime: event.startTime,
          timeZone: 'Europe/Paris',
        },
        end: {
          dateTime: event.endTime,
          timeZone: 'Europe/Paris',
        },
        attendees: event.attendees || [],
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating calendar event:', error);
    return NextResponse.json(
      { error: 'Failed to create calendar event' },
      { status: 500 }
    );
  }
}
