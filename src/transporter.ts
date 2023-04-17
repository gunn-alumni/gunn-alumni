import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  streamTransport: true
})

export default transporter
