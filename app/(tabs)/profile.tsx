import React from 'react'
import { useSession } from '@/hooks/useSession';
import Account from '@/components/Account';

const profile = () => {
  const { session } = useSession();

  return (
    <>
      {session ? <Account session={session} /> : null}
    </>
  )
}

export default profile