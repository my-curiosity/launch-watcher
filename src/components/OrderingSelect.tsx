import { OrderingType } from '@/types/OrderingType';
import { ChangeEventHandler } from 'react';

type OrderingSelectProps = {
  ordering: OrderingType;
  onOrderingChange: ChangeEventHandler<HTMLSelectElement>;
};

function OrderingSelect({ ordering, onOrderingChange }: OrderingSelectProps) {
  return (
    <select
      className="bg-gray-100 hover:bg-gray-200 ring-1 ring-black dark:bg-slate-900 dark:hover:bg-gray-800 dark:text-white dark:ring-cyan-900 px-3 py-3 rounded-full focus:outline-none"
      value={ordering}
      onChange={onOrderingChange}
    >
      <option value="-net">Order by: Net ↑</option>
      <option value="-name">Order by: Name ↑</option>
      <option value="net">Order by: Net ↓</option>
      <option value="name">Order by: Name ↓</option>
    </select>
  );
}

export default OrderingSelect;
