import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { supabase } from './supabaseClient'
import { useState, useEffect } from 'react';
import Hello from './components/Hello.js'

function App() {

  const [session, setSession] = useState(null)
  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, sesh) => {
      setSession(sesh)
    })
  }, [])

  console.log(session)
  return (
    <div>
      {session
        ? <Hello
          session={session}
        />
        : <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />
      }
    </div>
  );
}

export default App;
