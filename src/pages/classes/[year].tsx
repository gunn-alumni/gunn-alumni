import ClassList from '@/components/classmates/ClassList';
import Container from '@/components/shared/Container';
import { ClassmatePreview } from '@/types/alumni';
import SB_serveronly from '@/lib/utils/dbserveronly';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

interface ClassesProps {
  people: ClassmatePreview[];
}

export default function Classes({
  people
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <Container>
      <h1 className="text-5xl font-black">2023 Alumni Directory</h1>
      <p className="text-xl text-gray-400 mt-2">
        All Gunn alumni who graduated in 2023
      </p>
      {people && (
        <ClassList
          year={(router.query.year as string) || ''}
          peopleArr={people}
        />
      )}
    </Container>
  );
}

//@ts-ignore
export const getServerSideProps: GetServerSideProps<ClassesProps> = async (
  context
) => {
  const year = context.params?.year;

  const { data, error } = await SB_serveronly.from('people')
    .select('*, profiles(pfp)')
    .eq('grad_year', year);

  return {
    props: {
      people:
        data === null
          ? []
          : data.sort((a, b) => {
              if (!!a.profiles == !!b.profiles) return 0;
              if (a.profiles) return -1;
              if (b.profiles) return 1;
              return 0;
            })
    }
  };
};
