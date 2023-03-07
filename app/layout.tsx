import './globals.css'

export const metadata = {
  title: 'Marco Singhof | Full-stack developer',
  description: 'Hey, I\'m a full-stack developer creating for the modern web with Laravel, Vue.js and various other state of the art technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">{children}</body>
    </html>
  )
}
