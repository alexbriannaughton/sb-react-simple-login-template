import { supabase } from "../supabaseClient"

const Hello = ( {session} ) => {

    return (
        <div>
            <h1>hello</h1>
            <button onClick={() => supabase.auth.signOut()}>sign out</button>
        </div>
    )
}

export default Hello