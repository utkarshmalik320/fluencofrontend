import React from 'react';
import { Pagination } from 'antd';
const App = ({currentPage, totalItems, onPageChange} ) =>(
    <>
    <>
  <div style={{flexDirection: "column" , display:"flex" , justifyContent:"center" , alignContent:"center"}}>
    <div style={{ flex: 1 }}>
      {/* Your other content goes here */}
    </div>
    <div style={{ textAlign: "center",marginLeft:"140px" , padding: "20px 0" }}>
      <Pagination
        current={currentPage}
        pageSize={12}
        total={totalItems}
        onChange={onPageChange}
      />
    </div>
  </div>
</>
    </>    
) 
export default App;