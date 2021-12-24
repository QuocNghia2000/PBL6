import React from 'react';
import CategoryDetailComponent from './../../components/CategoryDetail/index';
import axios from '../../constants/axiosInstance/index';
const CategoryDetail = ({route}) => {
  const id = route.params.data._id;
  // console.log('category:', id);
  const [data, setData] = React.useState([]);
  const getProductByCategoryID = () => {
    axios
      .get('product/category/' + id)
      .then(response => {
        // handle success
        //console.log('INFOR: ', response.data);
        setData(response.data);
      })
      .catch(error => {
        // handle errornse);
      });
  };
  React.useEffect(() => {
    getProductByCategoryID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('SP: ', data);

  return <CategoryDetailComponent data={data} />;
};

export default CategoryDetail;
