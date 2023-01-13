import React from "react";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ currentPage, setCurrentPage }: Props) => {
  return (
    <div className="pagination-shadow border-2 border-[#bdbdbd] rounded-lg flex overflow-hidden text-xs font-bold">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() =>
          setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))
        }
        className={`bg-white border-r-2 border-r-[#e9e9e9] flex-center xs:p-3 p-4 ${
          currentPage === 1
            ? "bg-[#f3f3f3] text-[#bdbdbd]"
            : "bg-white text-primary"
        }`}
      >
        Prev
      </button>

      {[1, 2, 3].map((num, index) => (
        <button
          key={`pagination-page-${index}`}
          className={`border-r-2 border-r-[#e9e9e9] flex-center xs:p-3 p-4 ${
            currentPage === num
              ? "text-white bg-primary"
              : "text-primary bg-white"
          }`}
          onClick={() => setCurrentPage(num)}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() =>
          setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage))
        }
        disabled={currentPage === 3 ? true : false}
        className={`flex-center xs:p-3 p-4 ${
          currentPage === 3
            ? "bg-[#f3f3f3] text-[#bdbdbd]"
            : "bg-white text-primary"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
