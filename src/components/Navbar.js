import { Disclosure} from '@headlessui/react'

function Navbar() {
return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <span className='text-white'>WL</span>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}
        </Disclosure>

      </div>
    </>
  )
}

export default Navbar;
