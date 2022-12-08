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
    <div className="w-[300px] h-[380px] flex flex-col items-center relative bg-gray gap-4 rounded-lg shadow-md border-2 border-stone-200">
      <picture>
        <img
          src={bannerSource}
          alt="project image"
          width="100%"
          className="rounded-t-lg"
        />
      </picture>
      <h2 className="font-bold text-xl text-darkblue mb-4">{projectTitle}</h2>
      <ul className="flex flex-row gap-4 items-center">
        {icons.map((icon) => (
          <li key={icon} className="w-[30px]">
            <img src={icon} alt="icon" />
          </li>
        ))}
      </ul>
      <p>{projectDescription}</p>

      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="w-1/2 text-center bg-blue text-white rounded-full absolute bottom-3 font-bold transition-all hover:bg-white hover:text-darkblue hover:border-2 hover:border-darkblue"
      >
        {linkText}
      </a>
    </div>
  );
}
