import React from 'react';

const JoinUsBanner = () => {
  return (
    <div className="bg-[#ff5023] py-10 px-6 text-white flex flex-col lg:flex-row justify-between items-center" style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
      <div>
        <h2 className="text-lg font-bold mb-2">JOIN US</h2>
        <p className="text-sm max-w-md">
          To see all available payment methods in your country, <span className="font-bold">register</span> or <span className="font-bold">log in</span> to MyRightTRADE Capital. Alternatively, have a look at our FAQs below.
        </p>
      </div>
      <div className="flex gap-4 mt-4 lg:mt-0">
        <button className="bg-white text-[#ff5023] px-4 py-2 rounded-full text-sm font-semibold">FAQs</button>
        <button className="bg-white text-[#ff5023] px-4 py-2 rounded-full text-sm font-semibold">MyRightTRADE Capital</button>
      </div>
    </div>
  );
};

export default JoinUsBanner;
