import * as React from 'react';

export default function SpanningTable() {
  return (
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 border-b-2">
          <h1 class="text-xl font-semibold py-2">Order summary</h1>
        </div>
        <div class="text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <div class="text-gray-400"><i class="fa fa-building mr-2"></i>Unit type</div>
          <div class="text-sm"><i class="mr-6"></i>5' x 5' (25 sq ft)</div>
        </div>
        <div class="text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <div class="text-gray-400">Unit Assigned</div>
          <div class="text-sm">112</div>
        </div>
        <div class="col-span-2 text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <h1 class="text-gray-400"><i class="fa fa-suitcase mr-2"></i>Move-in date</h1>
          <div class="text-sm"><i class="mr-6"></i>10th November 2023</div>
        </div>
        <div class="text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <div class="text-gray-400"><i class="fas fa-pound-sign mr-2"></i>Deposit</div>
          <div class="text-sm"><i class="mr-4"></i>$200.00</div>
        </div>
        <div class="text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <div class="text-gray-400">Monthly rent</div>
          <div class="text-sm">$100.00</div>
        </div>
        <div class="col-span-2 text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <h1 class="text-gray-400"><i class="fas fa-credit-card mr-2"></i>Prepayment</h1>
          <div class="text-sm"><i class="mr-7"></i>-</div>
        </div>
        <div class="col-span-2 text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <h1 class="text-gray-400"><i class="fas fa-rocket mr-2"></i>Promo code</h1>
          <div class="text-sm"><i class="mr-6"></i>$200.00</div>
        </div>
        <div class="col-span-2 text-gray-900 font-semibold flex flex-col items-left py-2 border-b-2">
          <h1 class="text-gray-400"><i class="fas fa-cube mr-2"></i>Products</h1>
          <div class="text-sm"><i class="mr-6"></i>-</div>
        </div>
      </div>
      <div class="flex justify-evenly py-2">
        <button class="text-blue-500 hover:text-blue-700 underline items-center">
          <i class="fas fa-file-invoice mr-2"></i>Preview invoice
        </button>
        <button class="text-blue-500 hover:text-blue-700 underline items-center">
          <i class="fas fa-file-contract mr-2"></i>View contract
        </button>
      </div>
    </div>
  );
}
