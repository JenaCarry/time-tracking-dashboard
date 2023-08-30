interface IProfile {
  order: string;
  setOrder: React.Dispatch<
    React.SetStateAction<"daily" | "weekly" | "monthly">
  >;
}

export function Profile({ order, setOrder }: IProfile) {
  return (
    <section className="bg-card rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-profile flex items-center gap-[1.125rem] px-7 py-8 rounded-2xl shadow-xl lg:flex-col lg:items-start lg:pb-14">
        <figure className="border-[3px] border-white rounded-full lg:mb-7">
          <img
            className="w-[4.375rem] h-[4.375rem]"
            src="image-jeremy.png"
            alt="Jeremy"
            width="234"
            height="234"
          />
          <figcaption className="sr-only">
            In the bustling streets of a city, a charismatic young man with
            dreadlocks exudes joy as he smiles warmly. His stylish attire
            includes a denim jacket, which adds to his urban look. With his
            confident demeanor, he stands out effortlessly in the vibrant
            surroundings, showcasing his unique personality and individuality.
            The black man's striking appearance of him, highlighted by his
            distinctive hairstyle of him, reinforces his sense of
            self-expression as he navigates the energetic cityscape.
          </figcaption>
        </figure>
        <div>
          <h2 className="text-primary-text flex flex-col">
            Report for
            <span className="text-white text-xl font-light lg:text-4xl">
              Jeremy Robson
            </span>
          </h2>
        </div>
      </div>
      <div>
        <ul className="flex justify-evenly py-7 lg:flex-col lg:px-7 lg:gap-5">
          <li>
            <button
              className={`${order === "daily" ? "text-white" : ""}`}
              onClick={() => setOrder("daily")}
            >
              Daily
            </button>
          </li>
          <li>
            <button
              className={`${order === "weekly" ? "text-white" : ""}`}
              onClick={() => setOrder("weekly")}
            >
              Weekly
            </button>
          </li>
          <li>
            <button
              className={`${order === "monthly" ? "text-white" : ""}`}
              onClick={() => setOrder("monthly")}
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
