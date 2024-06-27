import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug: querySlug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === querySlug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, books, previousVolume, nextVolume } =
    currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={`/images/${querySlug}.png`}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
