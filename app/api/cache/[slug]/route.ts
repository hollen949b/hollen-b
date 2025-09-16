import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function GET(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  const params = await context.params
  // let status = 200
  
  revalidateTag(params.slug)
 
  return new Response('Success', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}