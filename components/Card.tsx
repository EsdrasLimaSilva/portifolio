interface Props {
  bannerSource: string;
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
  linkText: string;
  icons: string[];
}

export default function Card({
  bannerSource,
  projectTitle,
  projectDescription,
  icons,
  projectUrl,
  linkText,
}: Props) {
  return (
    <div className="w-[300px] h-[400px] flex flex-col items-center gap-6 bg-gray shadow-md rounded-lg pb-4 text-darkblue relative">
      <picture>
        <img
          src={bannerSource}
          alt="project image"
          width="100%"
          className="rounded-t-lg"
        />
      </picture>
      <h2 className="font-bold text-2xl">{projectTitle}</h2>
      <ul className="flex flex-row gap-2 items-center">
        {icons.map((icon) => (
          <li className="w-[30px]">
            <img src={icon} alt="icon" />
          </li>
        ))}
      </ul>
      <p className="w-[90%] text-center">{projectDescription}</p>

      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="w-1/2 bg-blue text-white text-center font-bold rounded-full hover:bg-white hover:text-blue border-[0.5px] transition-all absolute bottom-[10px]"
      >
        {linkText}
      </a>
    </div>
  );
}
