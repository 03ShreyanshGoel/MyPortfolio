import ArrowDownShort from './ArrowDownShort';

const Title = ({ title }) => {
  return (
    <div className="flex items-center justify-between gap-2 pb-5 md:gap-3">
      <p className="text-2xl font-semibold text-gray-900 md:text-6xl">
        {title}
      </p>
      <ArrowDownShort />
    </div>
  );
};

export default Title;
