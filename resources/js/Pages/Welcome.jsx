import React from 'react';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600">Welcome to Laravel + Inertia + React</h1>
            </div>
        </>
    );
}
