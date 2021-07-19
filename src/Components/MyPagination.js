import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function pagination(c, m) {
  let current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i <= right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  return rangeWithDots;
}

function MyPagination() {
  const [pageCount, setPageCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let handalePage = (index, e) => {
    if (e !== "...") {
      let tmp = pagination(e, 20);
      setCurrentPage(e);
      setPageCount(tmp);
    }
  };

  let handleLeft = () => {
    if (currentPage < 1) {
      setCurrentPage(1);
    } else {
      let tmp = currentPage;
      tmp++;
      setCurrentPage(tmp);
    }
  };

  let handleRight = () => {
    if (currentPage > pageCount.length) {
      setCurrentPage(pageCount.length);
      pagination(currentPage, 20);
    } else {
      let tmp = currentPage;
      tmp++;
      setCurrentPage(tmp);
    }
  };

  useEffect(() => {
    let tmp = pagination(currentPage, 20);
    setPageCount(tmp);
  }, []);

  return (
    <>
      <Grid container spacing={5} wrap="nowrap" justify="flex-end">
        <Grid item lg={1}>
          <Button onClick={handleLeft}> {"<"} </Button>
        </Grid>

        {pageCount.map((e, index) => (
          <Grid item lg={1}>
            <Button onClick={() => handalePage(index, e)}> {e} </Button>
          </Grid>
        ))}

        <Grid item lg={1}>
          <Button onClick={handleRight}> {">"} </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default MyPagination;
