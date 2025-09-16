import { Template } from '@/components/email/template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server'
import { getBusinessInfo } from '@/lib/api';

export async function POST(request: Request) {
  const formData = await request.json()
  let response = {}
  let status = 200
  
  // Check if API key is available
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({error: 'Email service not configured'}, { status: 500 })
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  const business = await getBusinessInfo()  

  try {
    const { data, error } = await resend.emails.send({
      from: `${business.businessName} <mail@${process.env.NEXT_PUBLIC_SITE_DOMAIN}>`,
      reply_to: formData.email,
      to: [ business.businessEmail],
      subject: `Message from ${business.businessName}`,
      react: Template({ name: formData.name, message:formData.message }),
    });

    if (error) {
      throw error;
    }

    // response = {error:'Thank you for contacting us! Your email has been received, and we will respond to you shortly.'}
    // return NextResponse.json({message:'Thank you for contacting us! Your email has been received, and we will respond to you shortly.', saved:true}, { status: status })
  } catch (error) {
    response = {error:error}
    status = 500
  }
  return NextResponse.json(response, { status: status })
}