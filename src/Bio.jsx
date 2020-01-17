import React from 'react'
import "./Profile.css"
 
 
class Bio extends React.Component {
        render() {
              const bioStyle = {
              margin: 0,
              marginBottom: "1rem"
              }

              const bio = ["Username: Harry-Beg", "Email: harrybeghaski@lorem.com"];

              return (
                  <div>
                    <h3 style={{textTransform: 'uppercase', textAlign: 'center', fontFamily: 'monospace', fontSize: '2rem', margin: '1rem 0'}}>User Bio</h3>
                        {bio.map((b, i) => {
                    return <h4 key={i} style={bioStyle && {textAlign: 'center' }}>{b}</h4>
                    })}
                </div>          
              );
        }
    }

export default Bio;
