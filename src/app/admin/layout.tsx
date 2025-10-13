import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Clinique Dentaire Saada',
  description: 'Blog management for Clinique Dentaire Saada',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  )
}