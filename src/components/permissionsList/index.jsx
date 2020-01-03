import React from 'react';

export default function permissionsList({ permissions }) {
    return (
        <>
          <section className="permissions">
            { permissions.map( item => (
              <li key={item.id}>
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