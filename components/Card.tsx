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
    <div className="w-[300px] h-[380px] flex flex-col items-center relative bg-gray gap-4 rounded-lg shadow-md">
      <picture>
        <img
          src={bannerSource}
          alt="project image"
          width="100%"
          className="rounded-t-lg"
        />
      </picture>
      <h2>{projectTitle}</h2>
      <ul className="flex flex-row gap-4">
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
        className="w-1/2 text-center bg-blue text-white rounded-full absolute bottom-3 font-bold"
      >
        {linkText}
      </a>
    </div>
  );
}
