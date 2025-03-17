const Title = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="bilbo accent-color py-4 text-3xl font-semibold tracking-wider underline decoration-2 underline-offset-8 sm:text-4xl">
        {title}
      </h1>
    </div>
  );
};

export default Title;
