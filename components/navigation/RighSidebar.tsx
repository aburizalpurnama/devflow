import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const RighSidebar = () => {
  const topQuestions = [
    { id: "1", title: "How to create a custom hook in React?" },
    { id: "2", title: "How to use React?" },
    { id: "3", title: "How to use Redux?" },
    { id: "4", title: "How to use React Router?" },
    { id: "5", title: "How to use React Context?" },
  ];

  const popularTags = [
    { id: "1", name: "react", questions: 100 },
    { id: "2", name: "javascript", questions: 190 },
    { id: "3", name: "typescript", questions: 170 },
    { id: "4", name: "python", questions: 101 },
    { id: "5", name: "golang", questions: 156 },
  ];

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-87.5 flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-lg:hidden dark:shadow-none">
      <div className="flex flex-col gap-10">
        <section>
          <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
          <div className="mt-7 flex w-full flex-col gap-7.5">
            {topQuestions.map(({ id, title }) => (
              <Link
                key={id}
                href={ROUTES.QUESTION(id)}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{title}</p>
                <Image
                  src={"/icons/chevron-right.svg"}
                  alt="Chevron"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {popularTags.map(({ id, name, questions }) => (
              <TagCard key={id} id={id} name={name} questions={questions} showCounts compact />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default RighSidebar;
