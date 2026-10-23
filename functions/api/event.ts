export const onRequestPost = async (context: any) => {
  try {
    const data: any = await context.request.json();
    const { event, path, timestamp, metadata } = data;

    if (!event) {
      return new Response(JSON.stringify({ error: 'Event name is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('[Telemetry Event]', { event, path, timestamp: timestamp || new Date().toISOString(), metadata });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid payload.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
