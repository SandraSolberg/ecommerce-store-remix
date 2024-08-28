const Welcome = () => {
  return (
    <div className='flex flex-1 flex-col  justify-center items-center gap-y-6 p-4'>
      <img
        className='w-auto h-auto max-w-80 h-w-80'
        src='/images/eco-shopping-rafiki.svg'
        alt={`Go to dashboard`}
      />

      <div className='text-center space-y-1'>
        <h1 className='text-3xl text-blue-900'>Welcome to TacoShop</h1>
        <p className='text-lg text-blue-900'>
          Please login or create a new account to get started.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
