import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber,{loading}] = useCreateSubscriberMutation();

  async function handleSubscribe(ev: FormEvent) {
    ev.preventDefault();

    await createSubscriber({ variables: { name, email } });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blurImage bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-[80rem] mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-[32rem] text-[40rem] leading-tight">
            Construa uma{" "}
            <strong className="text-colorBlue">aplicação completa</strong>, do
            zero, com <strong className="text-colorBlue">React</strong>
          </h1>
          <p className="mt-[16rem] text-colorText leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-[32rem] bg-colorBars border-[1rem] border-colorStrokeDivider rounded-[4rem]">
          <strong className="text-2xlrem mb-[24rem] block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-[8rem] w-full"
          >
            <input
              type="text"
              className="bg-colorBg rounded[4rem] px-[20rem] h-[56rem]"
              placeholder="Seu nome completo"
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              type="email"
              className="bg-colorBg rounded[4rem] px-[20rem] h-[56rem]"
              placeholder="Digite seu e-mail"
              onChange={(ev) => setEmail(ev.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-[16rem] bg-colorGreen uppercase py-[16rem] rounded-[4rem] font-bold text-smrem hover:bg-colorGreenDark transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-[40rem]" alt="" />
    </div>
  );
}
