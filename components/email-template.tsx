import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  service: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  service,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#e11d48', marginBottom: '20px' }}>New Contact Request</h1>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
        <p style={{ margin: '10px 0' }}><strong>Name:</strong> {name}</p>
        <p style={{ margin: '10px 0' }}><strong>Email:</strong> {email}</p>
        <p style={{ margin: '10px 0' }}><strong>Service Requested:</strong> {service}</p>
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>This message was sent from the CodeFoundry website contact form.</p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;
