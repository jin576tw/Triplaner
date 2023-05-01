import { Pagination } from "@mui/material";
import { Fragment, useState } from "react";

const PageContent = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const data = props.data;

  const itemsPerPage = props.row;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Fragment>
      {currentData.map((result) => {
        return result;
      })}
      <Pagination
        variant="outlined"
        shape="rounded"
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
      ></Pagination>
    </Fragment>
  );
};

export default PageContent;
