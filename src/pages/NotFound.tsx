import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>This Page does not exist</div>
      <Link to='products'>List of products</Link>
    </>
  );
};

export default NotFound;
