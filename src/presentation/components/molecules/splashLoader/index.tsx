import Lottie from 'lottie-react'

import LoaderAsset from '../../../../assets/coin.json'
const SplashLoader = () => {
  return (
    <>
      <div className="w-screen bg-[#10B880] h-screen bg-c-gray-100 flex justify-center items-center">
        <Lottie animationData={LoaderAsset} className="w-40" loop={true} />
      </div>
    </>
  )
}

export default SplashLoader
