import { useState } from 'react';
import { BookOpen, Send } from 'lucide-react';

function formatDate(d) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(d);
}

export default function DailyDevotion() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Grateful for His Faithfulness',
      message: 'Psalm 23 reminded me today that the Lord is my shepherd. He guides and comforts me.',
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Strength in Weakness',
      message: '2 Corinthians 12:9 — His grace is sufficient. Leaning on Him this week.',
      createdAt: new Date(new Date().getTime() - 3600 * 1000)
    }
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;
    const newItem = { id: Date.now(), title: title.trim(), message: message.trim(), createdAt: new Date() };
    setItems([newItem, ...items]);
    setTitle('');
    setMessage('');
  };

  return (
    <section id="devotion" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-fuchsia-600 text-white flex items-center justify-center">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Daily Devotion</h2>
          <p className="text-sm text-gray-500">Share what God is speaking to you today</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="grid gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Devotion title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="Share your devotion, verse, or reflection"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 font-medium text-white hover:bg-fuchsia-700 transition">
                <Send className="h-4 w-4" />
                Post Devotion
              </button>
            </div>
          </div>
        </form>

        <div className="grid gap-4">
          {items.map((it) => (
            <article key={it.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
                <span className="text-xs text-gray-500">{formatDate(new Date(it.createdAt))}</span>
              </div>
              <p className="mt-2 text-gray-700 leading-relaxed whitespace-pre-wrap">{it.message}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
