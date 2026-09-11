import Garden from '../components/garden/Garden';
import InfoBoxesContainer from '../components/info_boxes/InfoBoxesContainer';
import DashboardTitle from '../components/title/DashboardTitle';

export default function DashboardPage() {
  return (
    <>
      <DashboardTitle />
      <InfoBoxesContainer />
      <Garden />
    </>
  );
}
