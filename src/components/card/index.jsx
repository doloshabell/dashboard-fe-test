function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-[5] relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-2xl shadow-[#7090B014] ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
