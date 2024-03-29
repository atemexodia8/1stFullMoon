import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as SearchIcon } from 'assets/images/SearchIcon.svg';
import 'components/styles/SearchInput.scss';

interface SearchInputProps {
  placeholder: string;
  value: string;
  setValue: (val: string) => void;
  isIconAfter?: boolean;
  [index: string]: any;
  height?: number | string;
  width?: number | string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  setValue,
  isIconAfter,
  height = 40,
  width = '100%',
}) => {
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <Box
      height={height}
      width={width}
      className={`searchInput${searchFocused ? ' focusedSearchInput' : ''}`}
    >
      {!isIconAfter && <SearchIcon />}
      <Box flex={1} margin={isIconAfter ? '0 8px 0 0' : '0 0 0 8px'}>
        <input
          placeholder={placeholder}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          value={value}
          onChange={(evt: any) => setValue(evt.target.value)}
        />
      </Box>
      {isIconAfter && <SearchIcon />}
    </Box>
  );
};

export default SearchInput;
