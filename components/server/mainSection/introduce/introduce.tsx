const IntroduceSection = () => {
  return (
    <section id="introduce" className="py-20">
      <div className="container mx-auto p-7">
        <div className="max-w-full mx-auto border border-gray-800 p-6 text-xl flex flex-col gap-16">
          <strong className="text-6xl">끊임없이 배우고 성장하는 개발자</strong>
          <p>
            우연히 접한 개발이라는 분야는 제 인생의 전환점이 되었습니다. 처음엔
            단순한 흥미로 시작했지만, HTML과 CSS로 간단한 웹페이지를 만들고,
            React와 Node.js로 직접 기능을 구현해보며 웹 개발의 매력에 깊이
            빠져들었습니다.
          </p>
          <p>
            단순히 배우는 것을 넘어서 왜 이렇게 작동하는지를 고민하고, 팀
            프로젝트를 통해 실제 사용자 경험을 고려한 개발을 해보며 개발자로서의
            확신을 얻었습니다. 저는 스스로 배우고, 협업하며, 부족한 부분은
            끈질기게 채워나가는 사람입니다. 빠르게 적응하고 꾸준히 성장하는
            도전적인 신입{" "}
            <span className="text-white font-bold">풀스택 개발자 김민규</span>{" "}
            입니다.
          </p>
        </div>
      </div>
    </section>
  );
};
export default IntroduceSection;
