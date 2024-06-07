import fetch from 'node-fetch';

export async function POST(req) {
  const { captcha, formData } = await req.json();

  if (!captcha) {
    return new Response(JSON.stringify({ success: false, message: 'Captcha is required' }), {
      status: 400,
    });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  try {
    const response = await fetch(verifyUrl, {
      method: 'POST',
    });
    const data = await response.json();

    if (data.success) {
      // Proceed with form submission handling
      return new Response(JSON.stringify({ success: true, message: 'Captcha verified' }), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'Captcha verification failed' }), {
        status: 400,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Captcha verification failed', error }), {
      status: 500,
    });
  }
}
