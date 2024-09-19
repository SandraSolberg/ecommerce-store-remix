import SkeletonCard from '../ProductCard/SkeletonCard';

const SkeletonContainer = () => {
  return (
    <div className='flex flex-wrap'>
      {[...Array(6)].map((_skeleton, index) => (
        <div key={index}>
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
};

export default SkeletonContainer;
