type MessageProps = {
  color?: string;
  message: string;
};

const Message = ({ color = "text-red-600", message }: MessageProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className={`font-semibold font-mono text-3xl  ${color}`}>
        {message}
      </div>
    </div>
  );
};

export default Message;
