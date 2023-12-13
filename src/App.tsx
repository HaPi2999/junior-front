/**
 * @Copyright junior-team 2023
 */

import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Auth from '~pages/auth'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <div>
                    <Auth />
                </div>
            </div>
        </QueryClientProvider>
    )
}

export default App
