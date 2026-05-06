export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MONCORDEL</h1>
          <p className="text-xl mb-8">Student Interaction & Announcement Platform</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/announcements" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-100">
              View Announcements
            </a>
            <a href="/jokes" className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700">
              Have Fun 😂
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">📢 Announcements</h3>
              <p className="text-gray-700">Get instant notifications about school events, holidays, and important updates.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">👥 Student Interaction</h3>
              <p className="text-gray-700">Connect with classmates, share ideas, and collaborate on school projects.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">😂 Fun & Entertainment</h3>
              <p className="text-gray-700">Relax with jokes, games, and fun activities between classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">2500+</h3>
              <p className="text-blue-100">Active Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-blue-100">Announcements</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-blue-100">Teachers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p className="text-blue-100">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
