import PropTypes from 'prop-types'

export default function PageComponent({title, buttons, children}) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          {buttons}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            {children}
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  )
}

PageComponent.propTypes = {
  title: PropTypes.string
}
