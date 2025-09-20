import { NextResponse } from 'next/server'

// Web3Forms를 사용한 대체 이메일 전송 방법
// https://web3forms.com 에서 무료로 API 키를 받을 수 있습니다
export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json()

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR-ACCESS-KEY-HERE',
        subject: `[HorizonSeaweed 문의] ${name}님의 문의`,
        name: name,
        email: email,
        message: `
회사명: ${company || '미기재'}

문의 내용:
${message}
        `,
        to: 'loadstar0724@gmail.com',
      }),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: '이메일이 성공적으로 전송되었습니다.' 
      })
    } else {
      throw new Error(result.message || '이메일 전송 실패')
    }
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, message: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    )
  }
}