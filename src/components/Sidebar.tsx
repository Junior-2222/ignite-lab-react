import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  console.log(data);

  return (
    <aside className="w-[348rem] bg-colorBars p-[24rem] border-l[1rem] border-colorBorder">
      <span className="font-bold text-2xlrem pb-[24rem] mb-[24rem] border-b-[1rem] border-colorStrokeDivider block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-[32rem]">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
