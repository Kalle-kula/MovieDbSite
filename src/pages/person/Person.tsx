import { ImageComp, PageContainer } from "~/components";
import { useRouter } from "next/router";
import { noImage } from "public/images";

export interface IPersonData {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}
const Person = ({ profile_path, name, biography }: IPersonData) => {
  const router = useRouter();
  return (
    <PageContainer className="max-w-screen-xl">
      <div className="flex flex-col p-2 sm:flex-row sm:py-10">
        <div className="mb-4 flex flex-col items-center">
          <div className="flex w-full items-start">
            <button
              className="mb-4 h-10 rounded-lg bg-slate-50 px-3 shadow-xl hover:bg-slate-200"
              onClick={router.back}
            >
              <p>Tillbaka</p>
            </button>
          </div>
          <div className="flex h-[450px] w-[300px] items-center rounded-2xl bg-white sm:mr-10">
            {profile_path ? (
              <div className="relative h-full w-full">
                <ImageComp
                  imageSrc={profile_path}
                  imageWidth={300}
                  altText={name}
                  className="rounded-2xl"
                  fill
                  sizes="h-[450px]"
                />
              </div>
            ) : (
              <ImageComp altText={name} imageSrc={noImage} />
            )}
          </div>
        </div>
        <div className="w-full flex-col">
          <h2 className="mb-6 text-2xl font-bold">{name}</h2>
          <h4 className="text-lg font-bold">Biografi</h4>
          <p>{biography}</p>
        </div>
      </div>
    </PageContainer>
  );
};
export default Person;
