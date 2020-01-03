import React from 'react';

export default function permissionsList({ permissions, handleClick }) {
    return (
        <>
          <section className="permissions">
            { permissions.map( item => (
              <li key={item.id}
              onClick={handleClick}
              >
                  {item.title}
              </li>
            ))}  
          </section>  
        </>
      );
    }
    
    permissionsList.defaultProps = {
      permissions: []
    }