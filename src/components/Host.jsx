import React from 'react';

const Host = (props) => {
    return (
      <>
        <span className="nom-proprietaire">{props.name}</span>
        <img
          className="photo-proprietaire"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;