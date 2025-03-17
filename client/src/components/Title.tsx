const Title = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="bilbo accent-color py-4 text-4xl font-semibold underline decoration-2 underline-offset-8 sm:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default Title;
