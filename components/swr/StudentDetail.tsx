import useSWR from 'swr'

export interface IStudentDetailProps {
  studentId: string
}

export function StudentDetail({ studentId }: IStudentDetailProps) {
  const { data, mutate } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  })

  const handleMutate = () => {
    // mutate({ name: 'ez frontend' }, { revalidate: false })
    mutate({ name: 'ez frontend' }, { revalidate: true })
  }

  return (
    <div>
      Name: {data?.name || '--'} <button onClick={handleMutate}>Mutate</button>
    </div>
  )
}
