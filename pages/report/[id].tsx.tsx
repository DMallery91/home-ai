import { useRouter } from 'next/router';

export default function ReportPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Report ID: {id}</div>;
}