import PostImage from "./Post";
import { useState, useEffect } from "react";

const InfiniteScrolling = () => {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
      .then((data) => data.json())
      .then((res) => setData([...data, ...res]));
  }, [pageNo]);

  return (
    <div className="constainer-flex">
      <PostImage data={data} setPageNo={setPageNo} />
    </div>
  );
};

export default InfiniteScrolling;
