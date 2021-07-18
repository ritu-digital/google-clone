import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import Tooltip from '@material-ui/core/Tooltip';

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // console.log(data);
  // const data = response;
  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage__logo'
            src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
            alt='google logo'
          />
        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons />
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='searchPage__option'>
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div className='searchPage__option tools-button'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='searchPage__headerEnd'>
          <Link to='/settings'>
            <Tooltip title='Settings'>
              <SettingsIcon />
            </Tooltip>
          </Link>

          <Link to='/apps'>
            <Tooltip title='Google Apps'>
              <AppsIcon />
            </Tooltip>
          </Link>

          <Link to='/account'>
            <Tooltip title='Google Account'>
              <Avatar
                style={{
                  backgroundColor: '#01579B',
                  color: 'white',
                  width: '2rem',
                  height: '2rem',
                }}
              />
            </Tooltip>
          </Link>
        </div>
      </div>

      {term && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for{' '}
            {data?.queries?.request[0]?.searchTerms}
          </p>
          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <div className='searchPage__resultDisplayLinkCaret'>
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className='searchPage__resultImage'
                        src={item.pagemap?.cse_image[0]?.src}
                        alt='visual link'
                      />
                    )}
                  {item.displayLink}
                </a>
                <ArrowDropDownIcon className='caret-down' />
              </div>

              <a className='searchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
