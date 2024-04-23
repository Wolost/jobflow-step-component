import * as React from 'react';

export default function SpanningTable() {
    return (
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2">
            <div class="bg-gray-100 border-gray-500 rounded-b text-gray-900 px-4 py-3 shadow-md">
                <div class="flex items-center">
                    <i class="fas fa-clock text-gray-400 text-lg mr-2"></i>
                    <span class="text-sm font-semibold text-gray-800 mr-2">Tom Doodle</span>
                    <span class="text-sm font-semibold text-gray-600">moves in on 28th November 2023</span>
                    <span class="text-sm text-gray-600 ml-2">(in 12 days time)</span>
                </div>
            </div>
        </div>
    );
}
