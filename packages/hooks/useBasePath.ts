import { useLocation, useParams } from 'react-router-dom';

const useBasePath = () => {
  const location = useLocation();
  const params = useParams<Record<string, string>>();

  return Object.values(params).reduce(
    (path, param) => path.replace('/' + param, ''),
    location.pathname,
  );
};

export default useBasePath;
  //https://stackoverflow.com/questions/55526726/how-get-react-router-origin-url-without-params
