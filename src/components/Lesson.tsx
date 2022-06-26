import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLessons = slug == props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-colorTextApoio">{availableDateFormatted}</span>
      <div className={`rounded-[4rem] border-[1rem] border-colorStrokeDivider p-[16rem] mt-[8rem] group-hover:border-colorGreen ${isActiveLessons?'bg-colorGreen':''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={`text-smrem ${isActiveLessons?'text-colorWhite':'text-colorBlue'} font-medium flex items-center gap-[8rem] `}>
              <CheckCircle size={20 + "rem"} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={`text-smrem text-colorWarning font-medium flex items-center gap-[8rem] `}>
              <Lock size={20 + "rem"} />
              Em breve
            </span>
          )}

          <span className={`text-xsrem rounded-[4rem] py-[2rem] px-[8rem] text-colorWhite border-[1rem] ${isActiveLessons?'border-colorWhite':'border-colorGreenLight'} font-bold`}>
            {props.type == "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className={`mt-[20rem] block ${isActiveLessons?'text-colorWhite':'text-colorText'}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
