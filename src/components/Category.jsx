import React from 'react'

const Category = () => {
    const cate = [{
        title: "New Arrive",
        img:"https://img.freepik.com/free-icon/new-product_318-752857.jpg?t=st=1692239883~exp=1692240483~hmac=039cdc9f06146569b3ab520719118bc130681b8922d75862169c1876edc65295",
    },
    {
        title: "Best Seller",
        img:"https://img.freepik.com/free-vector/sale-speech-bubble_98292-5345.jpg?w=826&t=st=1692242866~exp=1692243466~hmac=5bbe1c5e5ac49698d2a8916830f4e1c8f5c12f62ff88095c688d9ea6702ea6e9",
    },
    {
        title: "Discount",
        img:"https://img.freepik.com/free-vector/colorful-sale-background_1361-538.jpg?w=826&t=st=1692242048~exp=1692242648~hmac=cc76696199121fbcfc7e16f7b007e2bfe86f3f09e059e3ce7e03a87344921e2b",
    },
    {
        title: "Skincare",
        img:"https://img.freepik.com/free-vector/pink-cosmetic-ad_52683-8498.jpg?w=826&t=st=1692242232~exp=1692242832~hmac=8ed632c99f3708ca1c07b529e4dc7ba06cddc563a57eff22e72d411a3f0a4260",
    },
    {
        title: "Lotion",
        img:"https://img.freepik.com/free-vector/blue-glass-spray-bottle_88138-254.jpg?w=826&t=st=1692242372~exp=1692242972~hmac=52b2047e9cd4e77def096d57d98d02327c8ab5a5f3ea6f1169b9e9b52a569a16",
    },
    {
        title: "Cosmetic",
        img:"https://img.freepik.com/free-vector/new-perfume-with-sakura-fragrance-realistic-illustration_1284-31303.jpg?w=900&t=st=1692242435~exp=1692243035~hmac=5ce85074f5a20ce27060350201283b16e3c853e39635a9aa1bc20bc0995df9c3",
    },
]
  return (
    <div className='w-full '>
        <div className='w-full max-w-[1440px] mx-auto py-6'>
            <h1 className='text-2xl font-semibold py-4 text-gray-700'>Category</h1>
        </div>
        <div className='w-full lg:flex xl:flex md:grid-cols-3 grid grid-cols-3 lg:gap-x-5 xl:gap-x-7 md:gap-x-0 gap-x-0 '>
            {cate.map((item,index) =>{
                return(
                    <div key={index} className='p-2 lg:ml-10 xl:ml-10 md:ml-0 ml-0'>
                        <img className='lg:w-[6rem] xl:w-[7rem] md:w-[6rem] lg:h-[6rem] xl:h-[7rem] md:h-[6rem] w-[5rem] h-[5rem] hover:scale-105 duration-300 object-cover rounded-full mx-auto '
                        src={item.img} alt="" />
                        <h1 className='text-center text-black text-xl'>{item.title}</h1>
                    </div>
                );
            })}
        </div>
        
    </div>
  )
}

export default Category