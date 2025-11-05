import { Calendar } from 'lucide-react';

const weeklyActivities = [
  {
    day: 'Saturday',
    time: '7:00 PM',
    name: 'COOL Sabtu Online',
    desc: 'Main fellowship: worship, Word, and sharing.'
  },
  {
    day: 'Wednesday',
    time: '8:00 PM',
    name: 'Midweek Prayer',
    desc: 'Online prayer focus and intercession.'
  },
  {
    day: 'Daily',
    time: '6:00 AM',
    name: 'Morning Prayer Chain',
    desc: 'Start the day in prayer together.'
  }
];

export default function Activities() {
  return (
    <section id="activities" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-violet-600 text-white flex items-center justify-center">
          <Calendar className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Activities</h2>
          <p className="text-sm text-gray-500">Weekly rhythms to stay connected</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Day</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Time</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Activity</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {weeklyActivities.map((act, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900 font-medium">{act.day}</td>
                <td className="px-4 py-3 text-gray-700">{act.time}</td>
                <td className="px-4 py-3 text-gray-900">{act.name}</td>
                <td className="px-4 py-3 text-gray-600">{act.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
