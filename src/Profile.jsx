import React from 'react';
import Bio from './Bio'


class Profile extends React.Component {
            render() {
              
                return (
                    <div className="card">
                        <h2 className="name">Harry Beghaski</h2>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt="Profile" />
                          <Bio />
                    </div>
                )
            }
        }


export default Profile;