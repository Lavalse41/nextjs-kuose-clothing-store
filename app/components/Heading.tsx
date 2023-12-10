interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h1
      className="
        mb-16 
        text-5xl 
        capitalize
        text-center"
    >
      {title}
    </h1>
  );
};

export default Heading;
