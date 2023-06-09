import { ThreeDots } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Loader;
