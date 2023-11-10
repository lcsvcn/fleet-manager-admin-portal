import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";

const ClientTable = ({ data }) => {
  const columns = [
        {
          title: 'Client Email',
          dataIndex: 'client_email',
          key: 'fleetId',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'Client Password',
          dataIndex: 'client_password',
          key: 'fleetName',
          width: 400,
          className:"text-white bg-gray-600 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'First Name',
          dataIndex: 'first_name',
          key: 'firstName',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'lastName',
        width: 400,
        className:"text-white bg-gray-600 p-2 border-r-2 border-b-2",
        rowClassName:"bg-black-ripon"
      },
        {
          title: 'Number of Drones',
          dataIndex: 'number_drones',
          key: 'numberDrones',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
      },
      {
        title: 'Number of Fleets',
        dataIndex: 'number_fleets',
        key: 'numberFleets',
        width: 400,
        className:"text-white bg-gray-600 p-2 border-r-2 border-b-2"
      },
  ];
  
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (pageNumber)=>{
      setActivePage(pageNumber)
    }
    const navigateToFleet = (fleetId) => {
      const url = `/drone/${fleetId}`;
      window.location.href = url;
    };

    return (
        <>
        <Table columns={columns} data={data} rowKey={data => data.id}  className='bg-purple-700 p-4 w-full text-center text-white rc-table-custom font-semibold '/>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          nextPageText={'Next'}
          prevPageText={'Prev'}
          firstPageText={'First'}
          lastPageText={'Last'}
          innerClass="js-ul"
          itemClass='js-li'
          linkClass='page-link'
        />
        </>
        
    );
};

export default ClientTable;