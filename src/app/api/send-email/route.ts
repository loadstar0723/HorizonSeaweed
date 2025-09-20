import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json()

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!
      }
    })

    // 이메일 옵션
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'loadstar0724@gmail.com',
      subject: `[HorizonSeaweed 문의] ${name}님의 문의`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">새로운 문의가 접수되었습니다</h2>
          <hr style="border: 1px solid #ddd; margin: 20px 0;">
          
          <div style="margin-bottom: 15px;">
            <strong>이름:</strong> ${name}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>이메일:</strong> ${email}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>회사명:</strong> ${company || '미기재'}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>문의 내용:</strong>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            이 이메일은 HorizonSeaweed 웹사이트의 문의 폼을 통해 자동으로 발송되었습니다.
          </p>
        </div>
      `,
      replyTo: email
    }

    // 이메일 전송
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: '이메일이 성공적으로 전송되었습니다.' })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, message: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    )
  }
}