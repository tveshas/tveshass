import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  const email = get(metadata, 'email', false)
  const medium = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const resume = get(metadata, 'resume', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img
            src="https://github.com/tveshas/tveshass/blob/main/src/images/profile.jpeg?raw=true"
            alt={metadata.name || "Profile"}
            className={classes.image}
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <br/>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {email && (
            <li className={classes.item}>
              <a className={classes.link} href={`mailto:${email}`}>
                Email
              </a>
            </li>
          )}
          {medium && (
            <li className={classes.item}>
              <a className={classes.link} href={medium}>
                Medium
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {resume && (
            <li className={classes.item}>
              <a className={classes.link} href={resume}>
                Résumé
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
