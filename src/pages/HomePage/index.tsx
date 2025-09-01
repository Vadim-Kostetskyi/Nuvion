import MainLayout from 'modules/core/components/MainLayout';
import Banner from 'modules/core/modules/Banner';
import ProposedWorks from 'modules/core/modules/ProposedWorks';

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <ProposedWorks />
    </MainLayout>
  );
};

export default HomePage;
