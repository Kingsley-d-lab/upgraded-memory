import './globals.css'

export const metadata = {
  title: 'MONCORDEL INTERNATIONAL SCHOOL',
  description: 'Student Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-blue-600 text-white shadow-lg p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🏫 MONCORDEL</h1>
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/announcements" className="hover:text-blue-200">Announcements</a>
              <a href="/jokes" className="hover:text-blue-200">Jokes</a>
              <a href="/login" className="hover:text-blue-200">Login</a>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-6 mt-12">
          <p>&copy; 2026 MONCORDEL INTERNATIONAL SCHOOL. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
