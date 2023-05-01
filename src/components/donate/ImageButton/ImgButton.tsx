interface ImgButtonProps {
  text: string;
  imageURL: string;
}

const ImgButton = ({ text, imageURL }: ImgButtonProps) => {
  return (
    <div
      className={
        imageURL +
        ' h-48 bg-cover bg-center w-full rounded-md shadow-md flex place-items-center place-content-center'
      }
    >
      <span className="font-bold h-fit text-white bg-black bg-opacity-50 px-2 rounded-lg text-xl text-center">
        {text}
      </span>
    </div>
  );
};

export default ImgButton;
