import * as React from 'react';

export default function SpanningTable() {
    return (
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2">
            <div class="flex items-center invoice-header p-2">
                <h1 class="text-xl font-semibold mr-4">Invoice <span class="text-gray-600">VT0129345</span></h1>
                <span class="border border-red-400 rounded bg-red-100 px-0.5 py-0.5 text-red-700 text-xs">Overdue</span>
                <span class="text-gray-600 text-xs ml-auto">23rd Oct 2023</span>
            </div>
            <table class="min-w-full bg-white text-sm ">
                <thead class="border">
                    <tr class="border-b text-l font-semibold">
                        <div class="py-2 px-2">
                            Items
                        </div>
                    </tr>
                    <tr class="text-xs">
                        <th class="w-1/4 py-2 px-2">Date</th>
                        <th class="w-1/2 py-2 px-2">Description</th>
                        <th class="w-1/6 py-2 px-2">Price</th>
                        <th class="w-1/6 py-2 px-2">Tax</th>
                        <th class="w-1/6 py-2 px-2">Subtotal</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700">
                    <tr>
                        <td class="border px-4 py-2">2023-10-25</td>
                        <td class="border px-4 py-2">Deposit</td>
                        <td class="border px-4 py-2">$200.00</td>
                        <td class="border px-4 py-2">$0.00</td>
                        <td class="border px-4 py-2">$200.00</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">2023-10-25</td>
                        <td class="border px-4 py-2">Rent</td>
                        <td class="border px-4 py-2">$100.00</td>
                        <td class="border px-4 py-2">$5.00</td>
                        <td class="border px-4 py-2">$105.00</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">2023-10-25</td>
                        <td class="border px-4 py-2">Admin fee</td>
                        <td class="border px-4 py-2">$10.00</td>
                        <td class="border px-4 py-2">$0.00</td>
                        <td class="border px-4 py-2">$10.00</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">2023-10-25</td>
                        <td class="border px-4 py-2">Cleaning fee</td>
                        <td class="border px-4 py-2">$5.90</td>
                        <td class="border px-4 py-2">$5.00</td>
                        <td class="border px-4 py-2">$10.90</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="border-b border-l px-4 py-2 text-right">Subtotal</td>
                        <td class="border-r border-b px-4 py-2">$325.90</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="border-b border-l px-4 py-2 text-right">Total</td>
                        <td class="border-r border-b px-4 py-2">$325.90</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-evenly">
                <button class="text-blue-500 hover:text-blue-700 underline items-center">
                    <i class="fas fa-file-invoice mr-2"></i>Preview invoice
                </button>
                <button class="text-blue-500 hover:text-blue-700 underline items-center">
                    <i class="fas fa-credit-card mr-2"></i>Charge customer
                </button>
            </div>
        </div>
    );
}
