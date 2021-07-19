import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button, Tooltip } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons, googleHomeInput }) => {
  const [{}, dispatch] = useStateValue('');
  const [input, setInput] = useState('');
  const history = useHistory();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push('/search');
  };
  return (
    <form className='search'>
      <div
        className={`search__input ${
          !googleHomeInput && 'search__googleHomeInput'
        }`}
      >
        {googleHomeInput ? (
          <>
            <SearchIcon className='search__inputIcon' />
            <input value={input} onChange={inputHandler} />
            <MicIcon
              className='search__micIcon'
              style={{ color: '#4285F4', marginLeft: '-3rem' }}
            />
          </>
        ) : (
          <>
            <input value={input} onChange={inputHandler} />
            <Tooltip title='Search by voice'>
              <MicIcon
                className='search__micIcon'
                style={{
                  color: '#4285F4',
                  marginRight: '8px',
                  cursor: 'pointer',
                }}
                label='voice search'
              />
            </Tooltip>
            <SearchIcon
              className='search__inputIcon'
              onClick={searchHandler}
              style={{ cursor: 'pointer' }}
            />
          </>
        )}
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={searchHandler} variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonsHidden'
            type='submit'
            onClick={searchHandler}
            variant='outlined'
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
