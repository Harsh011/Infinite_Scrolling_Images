import { useEffect } from "react";

const PostImage = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNo((pageNo) => pageNo + 1);
        }
      },
      { threshold: 1 }
    );

    const lastImage = document.querySelector(".image:last-child");
    if (!lastImage) return;

    observer.observe(lastImage);
  }, [data]);
  return (
    <div className="container">
      <div>
        {data?.map((item, i) => {
          return (
            <img className="image" key={i} src={item.download_url} alt="" />
          );
        })}
      </div>
    </div>
  );
};

export default PostImage;
