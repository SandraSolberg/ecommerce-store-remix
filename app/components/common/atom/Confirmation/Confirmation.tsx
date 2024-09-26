const Confirmation = () => {
  return (
    <div className='flex flex-col gap-4 items-center text-center'>
      <h2>Thank you for your order! </h2>
      <h3>Order number: {Math.floor(Math.random() * 1000)}</h3>
      <p>{`Rest assured, none of the data you provide will be saved. This is purely a frontend process.`}</p>
    </div>
  );
};

export default Confirmation;
