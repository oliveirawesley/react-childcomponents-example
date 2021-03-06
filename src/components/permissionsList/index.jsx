import React from 'react';

export default function permissionsList({ permissions, onClick }) {
    return (
        <>
          <section className="permissions">
            { permissions.map( item => (
              <li key={item.id}
              onClick={() => onClick(item.id)}
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