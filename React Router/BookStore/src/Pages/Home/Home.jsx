
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../../Components/Books/Books';

const Home = () => {
    const books =useLoaderData();
    return (
        <div className=''>
            <Banner></Banner>
            <Books books ={books}></Books>
        </div>
    );
};

export default Home;