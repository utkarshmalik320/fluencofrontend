import React from "react";
import { Select } from "antd";

const Sort = ({ sortOrder, handleSortSelect }) => {
  return (
    <div>
      <span>Sort by: </span>
      <Select
        style={{ width: 100 }}
        options={[
          { label: "Newest to Oldest", value: "asc" },
          { label: "Oldest to Newest", value: "desc" },
        ]}
        defaultValue={sortOrder}
        onSelect={handleSortSelect}
      />
    </div>
  );
};

export default Sort;
