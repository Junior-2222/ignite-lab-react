import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  let loading = true;
  let teacher = false;
  const { data } = useGetLessonBySlugQuery({
    fetchPolicy: "no-cache",
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    loading = true;
  } else {
    loading = false;
  }
  teacher= !!data?.lesson?.teacher;

  

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          {loading ? (
            <div className="bg-colorBlue text-colorBg text-center">
              CARREGANDO
            </div>
          ) : (
            <Player>
              <Youtube videoId={data!.lesson!.videoId} />
              <DefaultUi />
            </Player>
          )}
        </div>
      </div>

      <div className="p-[32rem] max-w-[1100px] mx-auto">
        <div className="flex items-start gap-[64rem]">
          <div className="flex-1">
            {loading ? (
              <div className="bg-colorBorder rounded-full mr-[50%]">&nbsp;</div>
            ) : (
              <h1 className="text-2xlrem font-bold">{data!.lesson!.title}</h1>
            )}

            {loading ? (
              <div className="bg-colorBorder rounded-full mb-[16rem] mt-[16rem]">
                &nbsp;
              </div>
            ) : (
              <p className="mt-[16rem] text-colorText leading-relaxed">
                {data!.lesson!.description}
              </p>
            )}

            {
              <div className="flex items-center gap-[16rem] mt-[24rem]">
                {loading ? (
                  <div className="h-[64rem] w-[64rem] rounded-full bg-colorBlue opacity-50">
                    &nbsp;
                  </div>
                ) : (
                  teacher &&
                  <img
                    className="h-[64rem] w-[64rem] rounded-full border-[3rem] border-colorBlue"
                    src={data!.lesson!.teacher!.avatarURL}
                    alt=""
                  />
                )}

                <div className="leading-relaxed">
                  {loading ? (
                    <div className="bg-colorBorder rounded-full w-[100rem] mb-[16rem] opacity-50">
                      &nbsp;
                    </div>
                  ) : (
                    teacher &&
                    <strong className="font-bold text-2xlrem block">
                      {data!.lesson!.teacher!.name}
                    </strong>
                  )}
                  {loading ? (
                    <div className="bg-colorBorder rounded-full w-[50rem] opacity-50">
                      &nbsp;
                    </div>
                  ) : (
                    teacher &&
                    <span className="text-colorText text-smrem block ">
                      {data!.lesson!.teacher!.bio}
                    </span>
                  )}
                </div>
              </div>
            }
          </div>

          <div
            className="mt-[16rem] text-colorText
          "
          >
            <a
              href="#"
              className="p-[16rem] text-smrem bg-colorGreen flex items-center rounded-[4rem] font-bold uppercase gap-[8rem] justify-center
              hover:bg-colorGreenDark transition-colors"
            >
              <DiscordLogo size={24 + "rem"} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-[16rem] text-smrem border-[1rem] border-colorBlue text-colorBlue flex items-center rounded-[4rem] font-bold uppercase gap-[8rem] justify-center
              hover:bg-colorBlue hover:text-colorBg transition-colors"
            >
              <Lightning size={24 + "rem"} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-[32rem] mt-[80rem] grid grid-cols-2">
          <a
            href="#"
            className="bg-colorBars rounded-[4rem] overflow-hidden flex items-stretch gap-[24rem] hover:bg-colorBorder transition-colors"
          >
            <div className="bg-colorGreenDark h-full p-[24rem] flex items-center">
              <FileArrowDown size={40 + "rem"} />
            </div>
            <div className="py-[24rem] leading-relaxed">
              <strong className="text-2xlrem">Material complementar</strong>
              <p className="text-smrem text-colorText mt-[8rem]">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="h-full p-[24rem] flex items-center">
              <CaretRight size={24 + "rem"} />
            </div>
          </a>
          <a
            href="#"
            className="bg-colorBars rounded-[4rem] overflow-hidden flex items-stretch gap-[24rem] hover:bg-colorBorder transition-colors"
          >
            <div className="bg-colorGreenDark h-full p-[24rem] flex items-center">
              <FileArrowDown size={40 + "rem"} />
            </div>
            <div className="py-[24rem] leading-relaxed">
              <strong className="text-2xlrem">Wallpapers exclusivos</strong>
              <p className="text-smrem text-colorText mt-[8rem]">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="h-full p-[24rem] flex items-center">
              <CaretRight size={24 + "rem"} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
