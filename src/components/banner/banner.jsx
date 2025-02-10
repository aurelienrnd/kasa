import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerContainer = styled.div`
background-image: url(${(props) => props.$image}););
`;

function Banner({ title, img }) {
  return (
    <BannerContainer className="banner" $image={img}>
      <div className="overlay">{title && <h1>{title}</h1>}</div>
    </BannerContainer>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default Banner;
