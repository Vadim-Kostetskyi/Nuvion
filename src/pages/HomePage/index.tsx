import MainLayout from 'modules/core/components/MainLayout';
import Banner from 'modules/core/modules/Banner';
import LatestProjects from 'modules/core/modules/LatestProjects';
import Prescription from 'modules/core/modules/Prescription';
import ProposedWorks from 'modules/core/modules/ProposedWorks';
import Representation from 'modules/core/modules/Representation';

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <ProposedWorks />
      <Representation />
      <Prescription />
      <LatestProjects />
    </MainLayout>
  );
};

export default HomePage;
