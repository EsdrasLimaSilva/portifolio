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
    <html lang="pt-br">
      <body className='bg-neutral-100'>{children}</body>
    </html>
  )
}
