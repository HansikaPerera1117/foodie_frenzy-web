const SearchBtn = ({ openSearchModal }) => {
  return (
    <div
      className="search-btn"
      data-bs-toggle="modal"
      data-bs-target="#search-modal"
      onClick={() => openSearchModal(true)}
    >
      <i className="fas fa-search" />
    </div>
  );
};
export default SearchBtn;
