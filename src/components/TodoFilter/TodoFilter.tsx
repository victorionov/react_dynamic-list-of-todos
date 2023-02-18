import React, { ChangeEvent } from 'react';

interface TodoFilterProps {
  selectedStatus: string,
  setSelectedStatus: (selectedStatus: string) => void,
  searchQuery: string,
  setSearchQuery: (searchQuery: string) => void,
}

export const TodoFilter: React.FC<TodoFilterProps> = (
  {
    selectedStatus,
    setSelectedStatus,
    searchQuery,
    setSearchQuery,
  },
) => {
  const handleSelectedStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={selectedStatus}
            onChange={handleSelectedStatus}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {searchQuery && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              aria-label="Clear Search"
              onClick={() => setSearchQuery('')}
            />
          )}
        </span>
      </p>
    </form>
  );
};
