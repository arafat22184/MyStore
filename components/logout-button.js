'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
    >
      <LogOut className="h-4 w-4" />
      <span className="text-sm">Logout</span>
    </button>
  )
}