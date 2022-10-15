import { useEffect, useState } from 'react'

export default function Dropdown({ items, value, onChange }) {
  const [visibility, setVisibility] = useState(false)

  const handleItemChange = (item) => {
    onChange(item)
    setVisibility((visibility) => !visibility)
  }

  useEffect(() => {
    window.addEventListener('mouseup', (e) => {
      let id = e.target.id
      if (!id.includes('menu-') && !id.includes('item-')) setVisibility(false)
    })
    return () => {
      window.removeEventListener('mouseup', () => {})
    }
  }, [])

  return (
    <div className="relative inline-block text-left">
      <div className="w-10 h-10">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setVisibility((visibility) => !visibility)}
        >
          {value}
        </button>
      </div>

      {visibility && (
        <div
          className="absolute right-0 w-15 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="p-1 w-full" role="none">
            {items.map((item, index) => (
              <button
                className="text-gray-700 w-full rounded-md hover:bg-blue-300 block p-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                key={index}
                onClick={() => handleItemChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
