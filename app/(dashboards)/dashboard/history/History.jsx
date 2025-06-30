'use client'

const historyData = [
  {
    id: 1,
    hospital: 'Lagos State General Hospital',
    date: 'May 12, 2025',
    time: '10:30 AM',
    location: 'Lagos, Nigeria',
    status: 'Completed'
  },
  {
    id: 2,
    hospital: 'National Hospital Abuja',
    date: 'March 28, 2025',
    time: '2:00 PM',
    location: 'Abuja, Nigeria',
    status: 'Completed'
  },
  {
    id: 3,
    hospital: 'Port Harcourt City Clinic',
    date: 'June 25, 2025',
    time: '11:00 AM',
    location: 'PH, Nigeria',
    status: 'Pending'
  }
]

const statusColor = {
  Completed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-700'
}

export default function HistoryPage() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-red-600 mb-4">🩸 Donation History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-2">Hospital</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry) => (
              <tr key={entry.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{entry.hospital}</td>
                <td className="px-4 py-3">{entry.date}</td>
                <td className="px-4 py-3">{entry.time}</td>
                <td className="px-4 py-3">{entry.location}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-sm px-2 py-1 rounded-full font-medium ${statusColor[entry.status]}`}
                  >
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {historyData.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No donation history found yet.</p>
      )}
    </div>
  )
}
