import { Outlet } from 'react-router-dom'

import { BackgroundBeam } from '@/presentation/components/molecules/backgroundBeam'

export function AuthLayout() {
  return (
    <div className="bg-gradient-to-bl from-lime-950/50 to-lime-950 to-50% dark:bg-gradient-to-br dark:from-lime-950/20 dark:to-lime-950/30  h-dvh  text-slate-950 transition-bg">
      <BackgroundBeam />
      <Outlet />
    </div>
  )
}
