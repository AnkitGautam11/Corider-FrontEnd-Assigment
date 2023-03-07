import React, {useEffect, useState} from 'react'
import Loading from '../loading/Loading';
import './Card.css'

const Card = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            setLoading(false);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <Loading />
    }

  return (
    <>
        <div className="mainCard">
            {
                users.map((element) => {
                    return(
                        <div>
                            
                            <div className='Card'>
                                <div className='upper-container'>
                                    <div className='img-container'>
                                        <img src={`https://avatars.dicebear.com/v2/avataaars/${element.username}.svg?options[mood][]=happy`} alt="" height='100px' width='100px'/>
                                    </div>
                                </div>
                                <div className='lower-container'>
                                    <h3>{element.name}</h3>
                                    <h4><span className='tagHead'>Email:</span> {element.email}</h4>
                                    <h4><span className='tagHead'>Phone No:</span> {element.phone}</h4>
                                    <h4><span className='tagHead'>Address:</span> {element.address.street} {element.address.suite} {element.address.city} {element.address.zipcode}</h4>
                                    <h4><span className='tagHead'>Website:</span> {element.website}</h4>
                                    <h4><span className='tagHead'>Company Name:</span> {element.company.name}</h4>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Card