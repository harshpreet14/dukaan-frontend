import React from 'react'
import Header from './Header';
import Table from './Table'
import Cards from './Cards'

const Container = () => {
  return (
    <div className="grow">
          <Header />
          <main className=' p-8 space-y-6'>
            <aside className='flex justify-between items-center'>
              <h1 className='text-text-dark text-xl font-medium'>Overview</h1>
              <select className='p-2 bg-white border-2 rounded-md text-text font-medium'>
                <option>This Month</option>
              </select>
            </aside>
            <Cards />
            <h1 className='text-text-dark text-xl font-medium'>Transactions | This Month</h1>
            <aside className=' space-x-3'>
              <span className='py-1.5 px-4 bg-[#E6E6E6] rounded-full text-sm font-medium text-[#808080]'>Payouts {"(22)"}</span>
              <span className='py-1.5 px-4 bg-[#146EB4] rounded-full text-sm font-medium text-white'>Refunds {"(6)"}</span>   
            </aside>
            <Table />
          </main>
    </div>
  )
}

export default Container;