const Categories = () => {
  const categories: Categorie[] = [
    {
      name: "Men's clothing",
      image: "men's clothing.png",
    },
    {
      name: "Women's Clothing",
      image: "women's clothing.png",
    },
  ];

  return (
    <div className="flex flex-col w-full sm:max-w-[1200px] max-h-[400px] gap-y-4 mx-auto">
      <h1 className=" font-bold text-2xl">Categories</h1>
      <div className="flex flex-row gap-x-4 justify-center">
        {categories.map((c, index) => (
          <div className="flex flex-col gap-y-2  " key={index}>
            <img
              src={c.image}
              alt="mens"
              className="max-h-[350px] w-auto rounded-2xl shadow "
            />
            <p className="mx-auto">{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
