import MainLayout from 'modules/core/components/MainLayout';
import Banner from 'modules/core/modules/Banner';
import ContactInformation from 'modules/core/modules/ContactInformation';
import FeedBack from 'modules/core/modules/FeedBack';
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
      <ContactInformation />
      <FeedBack />
    </MainLayout>
  );
};

export default HomePage;
