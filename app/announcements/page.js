'use client'

export default function Announcements() {
  const announcements = [
    { id: 1, title: 'Sports Day', content: 'Annual sports day on June 15th', priority: 'high' },
    { id: 2, title: 'Exams Schedule', content: 'Mid-term exams from May 20th', priority: 'high' },
    { id: 3, title: 'School Closure', content: 'School closed on May 10th', priority: 'medium' },
  ]

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-8">📢 Announcements</h1>
      <div className="space-y-6">
        {announcements.map(ann => (
          <div key={ann.id} className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${ann.priority === 'high' ? 'border-red-500' : 'border-yellow-500'}`}>
            <h2 className="text-2xl font-bold mb-2">{ann.title}</h2>
            <p className="text-gray-600">{ann.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
