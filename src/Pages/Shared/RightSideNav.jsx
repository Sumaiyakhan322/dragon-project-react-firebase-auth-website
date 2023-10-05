import { FaGoogle,FaGithub, FaFacebook,  FaTwitter, FaInstagram } from 'react-icons/fa'
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl font-bold">Login with</h2>
        <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
         Google
          
        </button>
        <button className="btn btn-outline w-full">
           <FaGithub></FaGithub>
         Github
          
        </button>
      </div>
      <div className='p-4 mb-6'>
        <h2 className="text-2xl font-bold mb-3">Find us on</h2>
       <a href="" className='p-4 flex items-center gap-3 text-lg border rounded-t-lg'><FaFacebook></FaFacebook>FaceBook</a>
       <a href="" className='p-4 flex items-center gap-3 text-lg border-x '><FaTwitter></FaTwitter>Twitter</a>
       <a href="" className='p-4 flex items-center gap-3 text-lg border rounded-b-lg'><FaInstagram></FaInstagram>Instagram</a>
      </div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl font-bold">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      
      </div>
    </div>
  );
};

export default RightSideNav;
