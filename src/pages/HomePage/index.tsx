import MainLayout from 'modules/core/components/MainLayout';
import Banner from 'modules/core/modules/Banner';
import ProposedWorks from 'modules/core/modules/ProposedWorks';
import Representation from 'modules/core/modules/Representation';

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <ProposedWorks />
      <Representation />
    </MainLayout>
  );
};

export default HomePage;
