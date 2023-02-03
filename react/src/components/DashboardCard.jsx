export default function ({title, children}) {
  return (
    <div
      className="bg-white shadow-md p-3 text-center flex flex-col animate-fade-in-down"
    >
      {title && <h3 className="text-2xl font-semibold">
        {title}
      </h3>
      }
      { children }
    </div>
  )
}
