import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, service } = await request.json();

    // Validate form data
    if (!name || !email || !service) {
      return Response.json(
        { error: 'Name, email, and service are required' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'CodeFoundry <onboarding@resend.dev>', // Update this with your verified domain
      to: ['info@codefoundry.co.id'],
      subject: `New Contact Request from ${name}`,
      react: EmailTemplate({ name, email, service }) as React.ReactElement,
      replyTo: email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('Error in contact form:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
