import BoxLayout from '../BoxLayout';

type Props = { value: number };

export default function ActiveSubscription({ value }: Props) {
  return (
    <BoxLayout
      description="Days Left"
      icon="^"
      title="Active Subscription"
      value={value}
      link="/subscription"
      linkText="Manage"
      color="purple"
    ></BoxLayout>
  );
}
