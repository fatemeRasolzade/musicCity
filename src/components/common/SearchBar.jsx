import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({color}) => {
    return (
        <div class="d-flex justify-content-between">
            <InputBase
            className={`${color} fs-5`}
            placeholder="دنبال چی می گردی"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon className={`${color} fs-3`}/>
          </IconButton>
        </div>
    )
}

export default SearchBar
