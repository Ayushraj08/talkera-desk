export const onRequestPost = async (context: any) => {
  try {
    const data: any = await context.request.json();
    const { name, business, email, phone, honeypot } = data;

    // Honeypot spam check
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Required fields validation
    if (!name || !business || !email) {
      return new Response(
        JSON.stringify({ error: 'Name, business, and email are required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('[Lead Submission Received]', { name, business, email, phone, date: new Date().toISOString() });

    return new Response(
      JSON.stringify({ success: true, message: 'Lead captured successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Invalid request payload.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
