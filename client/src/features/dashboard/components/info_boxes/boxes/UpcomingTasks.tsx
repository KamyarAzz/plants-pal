import BoxLayout from '../BoxLayout';

type Props = { value: string };

export default function UpcomingTasks({ value }: Props) {
  return (
    <BoxLayout
      description="Due in 2 days"
      icon="*"
      title="Upcoming Tasks"
      value={value}
      link="/calendar"
      linkText="View calendar"
      color="blue"
    ></BoxLayout>
  );
}
