import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, removeParamsFromUrl } from '../../utils/utility';
import * as styles from './card.module.scss';

const icons = {
  search: (
    <svg className={styles.svgSearch} viewBox="0 0 16 14.714">
      <path
        d="M14.008,11.8h-.64l-.216-.216A5.2,5.2,0,0,0,9.208,3a5.247,5.247,0,0,0-5.2,5.2H2l3.072,3.2L8.4,8.2H5.608a3.6,3.6,0,1,1,3.6,3.6,3.676,3.676,0,0,1-1.456-.3L6.568,12.68a5.18,5.18,0,0,0,6.016-.536l.216.216v.632l4.008,3.992L18,15.8Z"
        transform="translate(-2 -2.27)"
      />
    </svg>
  ),
};

function Card(props) {
  const { data } = props;
  const {
    slug, type, purpose, price = '', area = '', room = '', beds, areaUnit = '', location_names,
  } = data;
  const filtersText = `${beds ? `${beds} beds,` : ''} ${price ? `Price PKR: ${price},` : ''} ${
    area ? `${area} ${areaUnit}` : ''
  } ${room ? `${room} room` : ''} `;

  return (
    <Link href={removeParamsFromUrl('location_names', slug)} prefetch={false}>
      <p>
        <div className={`${styles.card} flexYcenter`}>
          <div className={`${styles.icon} inlineFlex flexYcenter flexXcenter`}>{icons.search}</div>
          <div className={`${styles.filterDes}`}>
            <div className={`${styles.text} ${styles.textTruncate}`}>{`${type} ${purpose} `}</div>
            <div className={`${styles.location} ${styles.textTruncate}`}>
              In
              {' '}
              {capitalizeFirstLetter(data.loc)}
              {location_names && location_names.length >= 1
                ? `, ${location_names.map((loc) => loc.replace('-', ' ')).join(', ')}`
                : ''}
            </div>
            {filtersText.length > 0 && (
              <div className={`${styles.textTruncate}`}>
                {!filtersText.split(' ').join('') ? '' : filtersText}
              </div>
            )}
          </div>
        </div>
      </p>
    </Link>
  );
}

export default Card;
