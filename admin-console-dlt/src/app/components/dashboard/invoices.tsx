import Image from "next/image";

const InvoicesComponent = ({className}:{className?: string}) => {
  const invoices =[
  {
    "id": "INV00025",
    "customer": "Emily Clark",
    "avatar": "https://i.pravatar.cc/150?img=1",
    "createdOn": "2025-02-22",
    "amount": 10000,
    "paid": 5000,
    "paymentMode": "Cash",
    "dueDate": "2025-03-04"
  },
  {
    "id": "INV00024",
    "customer": "John Carter",
    "avatar": "https://i.pravatar.cc/150?img=2",
    "createdOn": "2025-02-07",
    "amount": 25750,
    "paid": 10750,
    "paymentMode": "Check",
    "dueDate": "2025-02-20"
  },
  {
    "id": "INV00023",
    "customer": "Sophia White",
    "avatar": "https://i.pravatar.cc/150?img=3",
    "createdOn": "2024-12-09",
    "amount": 120500,
    "paid": 60000,
    "paymentMode": "Check",
    "dueDate": "2024-11-12"
  },
  {
    "id": "INV00022",
    "customer": "Michael Johnson",
    "avatar": "https://i.pravatar.cc/150?img=4",
    "createdOn": "2024-11-30",
    "amount": 750300,
    "paid": 60000,
    "paymentMode": "Check",
    "dueDate": "2024-10-25"
  },
  {
    "id": "INV00016",
    "customer": "Daniel Martinez",
    "avatar": "https://i.pravatar.cc/150?img=5",
    "createdOn": "2024-10-12",
    "amount": 999999,
    "paid": 400000,
    "paymentMode": "Cash",
    "dueDate": "2024-10-18"
  },
  {
    "id": "INV00015",
    "customer": "Charlotte Brown",
    "avatar": "https://i.pravatar.cc/150?img=6",
    "createdOn": "2024-10-05",
    "amount": 87650,
    "paid": 40000,
    "paymentMode": "Check",
    "dueDate": "2024-09-22"
  },
  {
    "id": "INV00014",
    "customer": "William Parker",
    "avatar": "https://i.pravatar.cc/150?img=7",
    "createdOn": "2024-09-09",
    "amount": 69420,
    "paid": 30000,
    "paymentMode": "Cash",
    "dueDate": "2024-09-15"
  },
  {
    "id": "INV00013",
    "customer": "Mia Thompson",
    "avatar": "https://i.pravatar.cc/150?img=8",
    "createdOn": "2024-09-02",
    "amount": 33210,
    "paid": 15000,
    "paymentMode": "Check",
    "dueDate": "2024-08-20"
  }
]


  return (
    <div className={`overflow-hidden bg-white shadow-sm ${className} mx-8 border border-gray-200 rounded`}>
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-left text-sm font-medium text-gray-500">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">
                <div className="inline-flex items-center gap-1">
                  Customer
                  <span className="text-xs">↕</span>
                </div>
              </th>
              <th className="px-6 py-4">
                <div className="inline-flex items-center gap-1">
                  Created On
                  <span className="text-xs">↕</span>
                </div>
              </th>
              <th className="px-6 py-4">
                <div className="inline-flex items-center gap-1">
                  Amount
                  <span className="text-xs">↕</span>
                </div>
              </th>
              <th className="px-6 py-4">
                <div className="inline-flex items-center gap-1">
                  Paid
                  <span className="text-xs">↕</span>
                </div>
              </th>
              <th className="px-6 py-4">Payment Mode</th>
              <th className="px-6 py-4">
                <div className="inline-flex items-center gap-1">
                  Due Date
                  <span className="text-xs">↕</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {invoices.map((inv) => (
              <tr className="hover:bg-gray-50" key={`index-inv${inv.id}`}>
                <td className="px-6 py-3 font-mono text-gray-900">{inv.id}</td>
                <td className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-indigo-100 ring-1 ring-indigo-200">
                      <Image
                        width={40}
                        height={40}
                        alt=""
                        className="h-full w-full object-cover"
                        src={inv.avatar}
                      />
                    </div>
                    <span className="font-medium text-gray-900">
                     {inv.customer}
                    </span>
                  </div>
                </td>
                <td className="px-6">{inv.createdOn}</td>
                <td className="px-6">{inv.paid}</td>
                <td className="px-6">{inv.amount}</td>
                <td className="px-6">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
                    Cash
                  </span>
                </td>
                <td className="px-6">{inv.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesComponent;
