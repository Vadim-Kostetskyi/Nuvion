import MainLayout from 'modules/core/components/MainLayout';
import Banner from 'modules/core/modules/Banner';
import Products from 'modules/core/modules/Products';

const PortfolioPage = () => {
  return (
    <MainLayout>
      <Banner />
      <Products />
    </MainLayout>
  );
};

export default PortfolioPage;
