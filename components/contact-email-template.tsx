import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  company,
  email,
  phone,
  service,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#e11d48', marginBottom: '20px' }}>New Contact Form Submission</h1>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
        <p style={{ margin: '10px 0' }}><strong>Name:</strong> {name}</p>
        <p style={{ margin: '10px 0' }}><strong>Company:</strong> {company || 'Not provided'}</p>
        <p style={{ margin: '10px 0' }}><strong>Email:</strong> {email}</p>
        <p style={{ margin: '10px 0' }}><strong>Phone:</strong> {phone || 'Not provided'}</p>
        <p style={{ margin: '10px 0' }}><strong>Service Requested:</strong> {service}</p>
        <div style={{ margin: '20px 0' }}>
          <strong>Message:</strong>
          <div style={{ 
            background: '#f9f9f9', 
            padding: '15px', 
            borderRadius: '5px', 
            marginTop: '5px',
            whiteSpace: 'pre-wrap' 
          }}>
            {message}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>This message was sent from the CodeFoundry contact page.</p>
      </div>
    </div>
  </div>
);

export default ContactEmailTemplate;
