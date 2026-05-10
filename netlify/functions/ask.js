exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let question;
  try {
    const body = JSON.parse(event.body);
    question = body.question;
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request' }) };
  }

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Question is required' }) };
  }

  const SYSTEM_PROMPT = `You are a historian and scholar of the American founding era (1760–1800), deeply versed in primary sources: the Declaration of Independence, the Constitution, the Federalist Papers, the Anti-Federalist Papers, founders' letters and diaries, Constitutional Convention records, and early Supreme Court decisions.

When answering questions:
- Ground every answer in what the historical record actually shows — the founders' own words, documented positions, and actions
- Be specific: cite which founder said or wrote what, and in which document or letter
- Acknowledge when founders disagreed with each other — they often did
- When connecting founding principles to modern issues, be factual and analytical, not partisan
- Write in an engaging, conversational tone — like the most well-read person at the table leaning in to share something the other person will find genuinely surprising and useful
- Keep answers substantive but readable — 3 to 5 paragraphs
- End every response with a SOURCES line formatted exactly like this:
SOURCES: [list the specific documents, letters, or writings you drew from, comma separated]

Do not roleplay as a founder. Speak as a knowledgeable historian presenting the evidence. The goal is to make the founding era feel alive and relevant, not academic and distant.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: question.trim() }]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Anthropic API error:', error);
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to consult the historical record' }) };
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ answer: text })
    };

  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Something went wrong' }) };
  }
};
