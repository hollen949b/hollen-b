import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const data = await request.json()
  let response = {}
  let status = 200

  try {
    revalidateTag(data.tag)
  } catch (error) {
    response = {error:error}
    status = 500
  }

  return NextResponse.json(response, { 
    status: status,
    headers: {
      'Access-Control-Allow-Origin': `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, 
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
  // return new Response('Success', {
  //   status: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   },
  // })
}