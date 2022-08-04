const Notification = ({ text }: { text: string }) => {
  return (
    <div className="absolute top-0 bg-green-600 w-[300px] py-2 text-center text-white">
      <p>{text}</p>
    </div>
  );
};

export default Notification;
