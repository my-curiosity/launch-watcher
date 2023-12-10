import ReactPaginate from 'react-paginate';

type PagesProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

function Pages({ currentPage, pageCount, onPageChange }: PagesProps) {
  return pageCount > 0 ? (
    <ReactPaginate
      key={pageCount}
      forcePage={currentPage}
      pageCount={pageCount}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      breakLabel="..."
      nextLabel=">"
      onPageChange={onPageChange}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="h-11 flex items-center rounded-full bg-gray-100 ring-1 ring-black dark:bg-slate-900 dark:text-white dark:ring-cyan-900"
      previousLinkClassName="text-black dark:text-white p-2 pl-3 pr-3 rounded-full"
      breakClassName="text-black dark:text-white p-2 pl-3 pr-3 rounded-full"
      nextLinkClassName="text-black dark:text-white p-2 pl-3 pr-3 rounded-full"
      pageClassName="text-black dark:text-white dark:hover:bg-gray-800 hover:bg-gray-200 hover:ring-1 hover:ring-black dark:hover:ring-cyan-900 p-1 pl-3 pr-3 rounded-full"
      disabledClassName=""
      activeClassName="bg-green-200 hover:bg-green-300 ring-1 ring-green-700 dark:bg-green-950 dark:hover:bg-green-900 dark:text-green-400 dark:ring-green-400 p-1 rounded-full"
    />
  ) : null;
}

export default Pages;
