import React from 'react'
import SearchSection from '../../components/SearchSection'

function CustomerList() {
  return (
    <>
    <h3>Customers</h3>
    <SearchSection data={{link:"customers/create"}}/>
    </>
  )
}

export default CustomerList