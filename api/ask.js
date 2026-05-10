export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body;

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'Question is required' });
  }

  if (question.length > 1000) {
    return res.status(400).json({ error: 'Question too long' });
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
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: question.trim() }]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Anthropic API error:', error);
      return res.status(500).json({ error: 'Failed to consult the historical record' });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    return res.status(200).json({ answer: text });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
