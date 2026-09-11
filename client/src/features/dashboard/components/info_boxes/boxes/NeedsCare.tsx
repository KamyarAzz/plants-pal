import BoxLayout from '../BoxLayout';

type Props = {
  total: number;
};

export default function NeedsCare({ total }: Props) {
  return (
    <BoxLayout
      icon="!"
      title="Needs Care"
      description="Plants Overdue"
      value={total}
      color="orange"
      link="/tasks"
      linkText="View tasks"
    ></BoxLayout>
  );
}
