const Progress = (props) => {
  const { value, width } = props;
  return (
    <div
      className={`h-2 ${
        width ? width : "w-full"
      } rounded-full bg-gray-200`}
    >
      <div
        className={"flex h-full items-center justify-center rounded-full bg-[#422AFB]"}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
