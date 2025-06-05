import { Ghost } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
                <div className="flex justify-center mb-8">
                    <Ghost className="h-24 w-24 text-gray-400" />
                </div>
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page not found</h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Sorry, we couldn't find the page you're looking for. Please check the URL or return home.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                    Go back home
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
