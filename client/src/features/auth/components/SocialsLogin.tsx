import googleImg from '@/assets/logos/google.svg';

export default function SocialsLogin() {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm flex gap-1 items-center mt-2">
        <div content="" className="h-px w-full bg-gray-300" />
        <p className="text-gray-400 flex-nowrap text-nowrap">or continue with</p>
        <div content="" className="h-px w-full bg-gray-300" />
      </div>
      <div className="flex justify-center items-center gap-2 border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100">
        <img src={googleImg} alt="Google" className="h-5 w-5" />
        <div>Google</div>
      </div>
    </div>
  );
}
