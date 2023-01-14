import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className='pt-[4rem] pl-[3rem] pr-[3rem]'>
       <h1 className="text-xl font-semibold text-gray-900">
                Assigned Requests
                </h1>
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className=" text-lg font-medium text-red-800">Ambulance Requested</h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              Name:<br />
              Email:<br/>
              Medical Emergency:<br/>
              Location:<br/>
            </p>
            {/* <div className='pt-[0.5rem]'>
            <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-red-400 px-3 py-2 text-sm font-medium leading-4 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Assign Ambulance
      </button>
</div> */}

<div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                className="rounded-md bg-red-50 px-2 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
              >
                Assign Ambulance
              </button>
              <button
                type="button"
                className="ml-3 rounded-md bg-red-50 px-2 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
              >
                Dismiss
              </button>
            </div>
            </div>



          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
