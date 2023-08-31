import data from "../../data.json";
import { Ellipsis } from "./icons/Ellipsis";

interface ProfileDataProps {
  order: "daily" | "weekly" | "monthly";
}

export function ProfileData({ order }: ProfileDataProps) {
  return (
    <section>
      <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <li
            key={item.title}
            style={{
              backgroundColor: `${item.color}`,
              backgroundImage: `url("${item.iconUrl}")`,
            }}
            className="rounded-2xl bg-no-repeat bg-[top_right_1.125rem] shadow-xl"
          >
            <div className="bg-card mt-11 rounded-[14px] px-6 py-8 space-y-[1.125rem] font-light lg:px-7 hover:bg-card-hover cursor-pointer transition-all duration-200 ease-in-out">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <div className="cursor-pointer group p-0.5">
                  <Ellipsis />
                </div>
              </div>
              <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
                <p className="text-2xl min-[425px]:text-3xl sm:text-4xl">
                  {item.timeframes[order].current}hrs
                </p>
                <p className="text-primary-text">
                  Last{" "}
                  <span className="capitalize">
                    {order === "daily"
                      ? "day"
                      : order === "weekly"
                      ? "week"
                      : "month"}
                  </span>{" "}
                  - {item.timeframes[order].previous}hrs
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
