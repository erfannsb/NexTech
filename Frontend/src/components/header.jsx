export default function Header() {
  return (
    <>
      {/* Top Left Corner of The Header */}
      <header className="bg-gray-800 text-white p-4 col-start-1 col-end-2 row-start-1 row-end-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold">NexTech</h1>
        <button>close</button>
      </header>
      {/* Top Right Corner of The Header */}
      <header className="flex items-center justify-between bg-amber-300 text-white p-4 col-start-2 col-end-4 row-start-1 row-end-2">
        {/* Profile */}
        <div className="flex items-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-sm font-medium">John Doe</span>
        </div>
        {/* Header Search Buttons and other Actions */}
        <div className="flex items-center">
          <button>Search</button>
          <button>Notifications</button>
          <button>Settings</button>
          <button>Help</button>
        </div>
      </header>
    </>
  );
}
