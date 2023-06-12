import './globals.css'


export const metadata = {
  title: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      <body className='bg-neutral-100'>{children}</body>
    </html>
  )
}
